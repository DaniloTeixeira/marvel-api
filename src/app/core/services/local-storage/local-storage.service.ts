import { Injectable } from '@angular/core';
import { Character } from '../../models/Character';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly KEY = 'marvel-api';

  getStoredCharacters(): Character[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]') as Character[];
  }

  saveCharacter(character: Character): void {
    const storedCharacters = this.getStoredCharacters();

    const shouldAddCharacter = storedCharacters.every(
      (c) => c.name !== character.name
    );

    if (shouldAddCharacter) {
      localStorage.setItem(
        this.KEY,
        JSON.stringify([...storedCharacters, character])
      );
    }
  }
}
