import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {NutritionalBenefit} from '../entity/nutritional-benefit';
import {of} from 'rxjs/observable/of';

@Injectable()
export class NutritionalBenefitService {

  private nutritionalBenefitURL = 'api/nutritionalBenefits';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getNutritionalBenefits(): Observable<NutritionalBenefit[]> {
    return this.http.get<NutritionalBenefit[]>(this.nutritionalBenefitURL)
      .pipe(
        tap(nutritionalBenefits => this.log(`fetched nutritionalBenefits`)),
        catchError(this.handleError('getNutritionalBenefits', []))
      );
  }

  /** Log a MealTypeService message with the MessageService */
  private log(message: string) {
    this.messageService.add('NutritionalBenefit: ' + message);
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
