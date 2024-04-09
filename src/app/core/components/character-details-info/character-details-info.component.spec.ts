import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { CharacterDetailsInfoComponent } from './character-details-info.component';

describe('CharacterDetailsInfoComponent', () => {
  let component: CharacterDetailsInfoComponent;
  let fixture: ComponentFixture<CharacterDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsInfoComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsInfoComponent);
    component = fixture.componentInstance;
    component.character = CHARACTER_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render details info length correctly', () => {
    component.character.comics = CHARACTER_MOCK.comics;

    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    expect(tableRows.length).toBe(component.character.comics.items.length);
  });

  it('should display "No name available" when details info is empty', () => {
    component.character.comics.items = [];
    component.character.series.items = [];

    component.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('span');

    spans.forEach((span: HTMLElement) => {
      expect(span.textContent).toBe('No name available');
    });
  });
});
