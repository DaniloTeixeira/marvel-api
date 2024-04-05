import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { apiInfo } from '../../data/api-info';
import {
  MarvelApiData,
  MarvelApiResponse,
} from '../../models/MarvelApiResponse';
import { encryptString } from '../../utils/encrypt-string';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private http = inject(HttpClient);

  getHeroesByName(name: string): Observable<MarvelApiData> {
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
      .get<MarvelApiResponse>(url, { params })
      .pipe(map((res) => res.data));
  }
}
