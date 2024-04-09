import { TestBed } from '@angular/core/testing';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let getItemSpy: jasmine.Spy;
  let setItemSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    getItemSpy = spyOn(localStorage, 'getItem').and.callFake(() => null);
    setItemSpy = spyOn(localStorage, 'setItem');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty array if no characters stored', () => {
    const storedCharacters = service.getStoredCharacters();
    expect(storedCharacters).toEqual([]);
    expect(getItemSpy).toHaveBeenCalledWith('marvel-api');
  });

  it('should return stored characters', () => {
    const characters = [CHARACTER_MOCK];

    getItemSpy.and.callFake(() => JSON.stringify(characters));

    const storedCharacters = service.getStoredCharacters();

    expect(storedCharacters).toEqual(characters);

    expect(getItemSpy).toHaveBeenCalledWith('marvel-api');
  });

  it('should save character to localStorage', () => {
    const character = CHARACTER_MOCK;

    service.saveCharacter(character);

    expect(setItemSpy).toHaveBeenCalledWith(
      'marvel-api',
      JSON.stringify([character])
    );
  });
});
