import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Character } from '../../models/Character';
import { CharacterDetailsInfoComponent } from '../character-details-info';

@Component({
  selector: 'app-character-details-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    CharacterDetailsInfoComponent,
  ],
  templateUrl: './character-details-modal.component.html',
  styleUrl: './character-details-modal.component.scss',
})
export class CharacterDetailsModalComponent {
  public dialogRef =
    inject<MatDialogRef<CharacterDetailsModalComponent>>(MatDialogRef);

  public character: Character;

  constructor(@Inject(MAT_DIALOG_DATA) characterInfo: Character) {
    this.character = characterInfo;
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
