import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSearchPanelComponent } from './recipes-search-panel.component';

describe('RecipesSearchPanelComponent', () => {
  let component: RecipesSearchPanelComponent;
  let fixture: ComponentFixture<RecipesSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
