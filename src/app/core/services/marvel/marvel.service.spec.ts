import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiResponse } from '../../models/ApiResponse';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { LoaderService } from '../loader/loader.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;
  let httpMock: HttpTestingController;
  let loaderService: LoaderService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarvelService, LoaderService, LocalStorageService],
    });
    service = TestBed.inject(MarvelService);
    httpMock = TestBed.inject(HttpTestingController);
    loaderService = TestBed.inject(LoaderService);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch character by name from API and save to local storage', () => {
    const characterName = 'Iron Man';
    const apiResponse: ApiResponse = {
      data: { results: [CHARACTER_MOCK] },
    };

    service.getCharacterByName(characterName).subscribe();

    const req = httpMock.expectOne((request) =>
      request.url.includes('/characters')
    );
    expect(req.request.method).toBe('GET');
    req.flush(apiResponse);

    expect(localStorageService.getStoredCharacters()).toEqual([
      apiResponse.data.results[0],
    ]);
  });

  it('should fetch character from local storage if character name already exists', () => {
    const character = CHARACTER_MOCK;

    localStorage.setItem('marvel-api', JSON.stringify([character]));

    const characterName = 'Hulk';

    spyOn(loaderService, 'showLoader');
    spyOn(loaderService, 'hideLoader');

    service.getCharacterByName(characterName).subscribe(() => {
      expect(loaderService.hideLoader).toHaveBeenCalled();
    });

    expect(loaderService.showLoader).toHaveBeenCalled();
  });
});
