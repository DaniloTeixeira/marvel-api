import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { CharacterDescriptionComponent } from './character-description.component';

describe('CharacterDescriptionComponent', () => {
  let component: CharacterDescriptionComponent;
  let fixture: ComponentFixture<CharacterDescriptionComponent>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [CharacterDescriptionComponent, MatCardModule],
      providers: [{ provide: MatDialog, useValue: matDialogSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDescriptionComponent);
    component = fixture.componentInstance;
    component.character = CHARACTER_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with the correct source and alt attributes', () => {
    const imgElement = fixture.nativeElement.querySelector('img');

    expect(imgElement.src).toBeTruthy();
    expect(imgElement.src).toContain(component.character?.thumbnail.path);
    expect(imgElement.src).toContain(component.character?.thumbnail.extension);
    expect(imgElement.alt).toBe(
      `Image of the Marvel character ${component.character?.name}`
    );
  });

  it('should display character name', () => {
    const characterName = fixture.nativeElement.querySelector('h1');

    expect(characterName.textContent).toContain('Hulk');
  });

  it('should display character description', () => {
    const characterDescription = fixture.nativeElement.querySelector('p');

    expect(characterDescription.textContent).toContain(
      'A super hero with super strength and the power to heal'
    );
  });

  it('should display "No description available" when character description is empty', () => {
    component.character!.description = '';

    component.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    const characterDescription = fixture.nativeElement.querySelector('p');

    expect(characterDescription.textContent).toContain(
      'No description available'
    );
  });

  it('should call onOpenInfoModal method', () => {
    const onOpenInfoModalSpy = spyOn(
      component,
      'onOpenInfoModal'
    ).and.callThrough();

    const button = fixture.nativeElement.querySelector('button');

    button.click();

    expect(onOpenInfoModalSpy).toHaveBeenCalled();
    expect(matDialogSpy.open).toHaveBeenCalled();
  });
});
