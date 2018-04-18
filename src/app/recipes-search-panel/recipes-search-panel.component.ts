import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../entity/recipe';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipes-search-panel',
  templateUrl: './recipes-search-panel.component.html',
  styleUrls: ['./recipes-search-panel.component.css']
})

export class RecipesSearchPanelComponent implements OnInit {
  @Output() notify: EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>();
  recipes$: Observable<Recipe[]>;

  private searchTerms = new Subject<string>();

  constructor(private recipeService: RecipeService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchRecipes(term)),
    );

    this.recipes$.subscribe( data => {
      // console.log('going to notify with data ' + data);
      this.notify.emit(data);
    });
  }

}
