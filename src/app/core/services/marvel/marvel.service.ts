import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { API_INFO } from '../../data/api-info';
import { ApiResponse } from '../../models/ApiResponse';
import { Character } from '../../models/Character';
import { encryptString } from '../../utils/encrypt-string';
import { strToLowerCase } from '../../utils/str-to-lowercase';
import { LocalStorageService } from '../local-storage';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private readonly http = inject(HttpClient);
  private readonly localStorageService = inject(LocalStorageService);

  private savedCharacter!: Character;

  getCharacterByName(name: string): Observable<Character> {
    this.findSavedCharacterByName(name);

    const isCharacterAlreadyExists =
      strToLowerCase(name) === strToLowerCase(this.savedCharacter?.name);

    if (isCharacterAlreadyExists) {
      return of(this.savedCharacter);
    }

    const url = `${API_INFO.apiBaseURL}/characters`;
    const hash = encryptString(
      `${API_INFO.timestamp}${API_INFO.privateKey}${API_INFO.publicKey}`
    );

    let params = new HttpParams()
      .append('name', name)
      .append('ts', API_INFO.timestamp)
      .append('apikey', API_INFO.publicKey)
      .append('hash', hash);

    return this.http.get<ApiResponse>(url, { params }).pipe(
      map((res) => res.data.results[0]),
      tap((character) => this.localStorageService.saveCharacter(character))
    );
  }

  private findSavedCharacterByName(name: string): void {
    const character = this.localStorageService
      .getStoredCharacters()
      .find(
        (character) => strToLowerCase(name) === strToLowerCase(character?.name)
      );

    if (character) {
      this.savedCharacter = character;
    }
  }
}
