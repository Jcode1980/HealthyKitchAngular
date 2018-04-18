import { Injectable } from '@angular/core';
import {MealType} from '../entity/meal-type';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Recipe} from '../entity/recipe';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';


@Injectable()
export class MealTypeService {
  private mealTypeURL = 'api/mealTypes';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }


  getMealTypes(): Observable<MealType[]> {
    return this.http.get<MealType[]>(this.mealTypeURL)
      .pipe(
        tap(mealTypes => console.log('fetching mealType')),
        catchError(this.handleError('getMealTypes', []))
      );
  }

  /** GET mealType by id. Will 404 if id not found */
  getMealType(id: number): Observable<MealType> {
    const url = `${this.mealTypeURL}/${id}`;
    return this.http.get<MealType>(url).pipe(
      tap(_ => this.log(`fetched mealType id=${id}`)),
      catchError(this.handleError<MealType>(`getMealTypes id=${id}`))
    );
  }


  /* GET mealTypes whose name contains search term */
  searchMealTypes(term: string): Observable<MealType[]> {
    if (!term.trim()) {
    // if not search term, return empty mealType array.
    return of([]);
  }
  return this.http.get<MealType[]>(`api/mealTypes/?name=${term}`).pipe(
    tap(_ => this.log(`found mealType matching "${term}"`)),
    catchError(this.handleError<MealType[]>('searchMealType', []))
  );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a MealTypeService message with the MessageService */
  private log(message: string) {
    this.messageService.add('MealTypeService: ' + message);
  }
}
