import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // http client instead of http

import { Observable, throwError, of, from, concat } from 'rxjs';
import { map, filter, catchError, flatMap, concatAll, toArray } from 'rxjs/operators'; // catchError instead of catch


const CONDITIONS_API = './assets/conditions.json';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
  public conditions: any;

  constructor(private http: HttpClient) { }

  getAllConditions(): Observable<any[]> {
    return this.http.get(CONDITIONS_API)
      .pipe(
      map((resp: any) => {
        this.conditions = resp.conditions;
        return this.conditions;
      }),
      catchError((error) => throwError(error.json())),
    );
  }

  getFilteredConditions(term): Observable<any> {
    return from(this.conditions)
      .pipe(
      filter((condition: any) => {
          return condition.hasOwnProperty('keywords') && condition.keywords.join(',').toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                 condition.hasOwnProperty('synonyms') && condition.synonyms.join(',').toLowerCase().indexOf(term.toLowerCase()) > -1;
      }),
      toArray(),
    );
  }
}
