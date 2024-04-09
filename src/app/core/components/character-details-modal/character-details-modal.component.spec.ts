import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CHARACTER_MOCK } from '../../tests/mocks/character-mock';
import { CharacterDetailsModalComponent } from './character-details-modal.component';

describe('CharacterDetailsModalComponent', () => {
  let component: CharacterDetailsModalComponent;
  let fixture: ComponentFixture<CharacterDetailsModalComponent>;
  let dialogRef: MatDialogRef<CharacterDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterDetailsModalComponent,
        MatDialogModule,
        MatIconModule,
        MatTabsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: CHARACTER_MOCK },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsModalComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on calling onCloseModal', () => {
    spyOn(dialogRef, 'close');

    component.onCloseModal();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
