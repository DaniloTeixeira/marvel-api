import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { CharacterDescriptionComponent } from '../../components/character-description';
import { MarvelService } from '../../services/marvel';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MarvelService', ['getCharacterByName']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule],
      providers: [{ provide: MarvelService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.character = CHARACTER_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render marvel logo in the page', () => {
    const img = fixture.nativeElement.querySelector('img');

    expect(img).toBeTruthy();
  });

  it('should render mat-spinner when loading is true', () => {
    component.loading = true;

    fixture.detectChanges();

    const searchButtonText = fixture.nativeElement.querySelector(
      '#search-button-text'
    );
    const spinnerElement = fixture.nativeElement.querySelector('mat-spinner');

    expect(searchButtonText).toBeFalsy();
    expect(spinnerElement).toBeTruthy();
  });

  it('should render "Search" span when loading is false', () => {
    component.loading = false;

    fixture.detectChanges();

    const searchButtonText = fixture.nativeElement.querySelector(
      '#search-button-text'
    );
    const spinnerElement = fixture.nativeElement.querySelector('mat-spinner');

    expect(searchButtonText).toBeTruthy();
    expect(spinnerElement).toBeFalsy();
  });

  it('should show loader when onSubmit is called', () => {});

  it('should display error message when character name is not typed', () => {
    component.control.setValue('');
    component.submitted = true;

    component.onSubmit();

    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '.empty-error-message'
    );

    expect(errorMessage.textContent.trim()).toEqual(
      'Type in the character name'
    );
  });

  it('should display character description when character info is available', () => {
    const characterDescription = fixture.debugElement.query(
      By.directive(CharacterDescriptionComponent)
    );

    expect(characterDescription).toBeTruthy();
  });

  it('should display "Not found message" when character doesn\'t exists', () => {
    component.showCharacterNotFoundMessage = true;
    component.character = undefined;

    fixture.detectChanges();

    const notFoundMsg = fixture.nativeElement.querySelector('#not-found-msg');

    expect(notFoundMsg.textContent).toBeTruthy();
    expect(notFoundMsg.textContent.trim()).toEqual(
      'Oops! Stan Lee did not create this character.'
    );
  });
});
