import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { apiInfo } from '../../data/api-info';
import { ApiResponse } from '../../models/ApiResponse';
import { Character } from '../../models/Character';
import { encryptString } from '../../utils/encrypt-string';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private http = inject(HttpClient);

  getCharactersByName(name: string): Observable<Character> {
    const url = `${apiInfo.apiBaseURL}/characters`;
    const hash = encryptString(
      `${apiInfo.timestamp}${apiInfo.privateKey}${apiInfo.publicKey}`
    );

    let params = new HttpParams()
      .append('name', name)
      .append('ts', apiInfo.timestamp)
      .append('apikey', apiInfo.publicKey)
      .append('hash', hash);

    return this.http
      .get<ApiResponse>(url, { params })
      .pipe(map((res) => res.data.results[0]));
  }
}
