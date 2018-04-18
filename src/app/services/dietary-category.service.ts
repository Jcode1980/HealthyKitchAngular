import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {DietaryCategory} from '../entity/dietary-category';

@Injectable()
export class DietaryCategoryService {

  private dietaryCategoryURL = 'api/dietaryCategories';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getDietaryCategories(): Observable<DietaryCategory[]> {
    return this.http.get<DietaryCategory[]>(this.dietaryCategoryURL)
      .pipe(
        tap(dietaryCategorys => this.log(`fetched dietaryCategorys`)),
        catchError(this.handleError('getDietaryCategorys', []))
      );
  }

  /** Log a MealTypeService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DietaryCategory: ' + message);
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


}
