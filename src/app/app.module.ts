import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RecipeService} from './services/recipe.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { FileDropModule} from 'ngx-file-drop';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesSearchPanelComponent } from './recipes-search-panel/recipes-search-panel.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {MealTypeService} from './services/meal-type.service';
import {DietaryCategoryService} from './services/dietary-category.service';
import {NutritionalBenefitService} from './services/nutritional-benefit.service';
import {MetricService} from './services/metric.service';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RecipeSearchComponent,
    FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    RecipesListComponent,
    RecipesSearchPanelComponent,
    RecipePreviewComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMultiSelectModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    FileDropModule,
    AngularMultiSelectModule
  ],
  providers: [RecipeService, MessageService, MealTypeService, DietaryCategoryService, NutritionalBenefitService, MetricService],
  bootstrap: [AppComponent]
})
export class AppModule { }
