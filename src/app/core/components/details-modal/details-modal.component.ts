import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.scss',
})
export class DetailsModalComponent {
  private dialogRef = inject<MatDialogRef<DetailsModalComponent>>(MatDialogRef);

  heroDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) apiResults: any) {
    this.heroDetails = apiResults;
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }
}
