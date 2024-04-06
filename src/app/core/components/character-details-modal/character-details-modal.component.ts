import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-character-details-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatTabsModule],
  templateUrl: './character-details-modal.component.html',
  styleUrl: './character-details-modal.component.scss',
})
export class CharacterDetailsModalComponent {
  private dialogRef =
    inject<MatDialogRef<CharacterDetailsModalComponent>>(MatDialogRef);

  heroInfoDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) heroInfo: any) {
    this.heroInfoDetails = heroInfo;
    console.log('heroInfoDetails: ', this.heroInfoDetails);
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
