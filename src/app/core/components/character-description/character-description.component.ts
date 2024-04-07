import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { Character } from '../../models/Character';
import { CharacterDetailsModalComponent } from '../character-details-modal';

@Component({
  selector: 'app-character-description',
  standalone: true,
  imports: [NgOptimizedImage, MatCardModule],
  templateUrl: './character-description.component.html',
  styleUrl: './character-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDescriptionComponent {
  @Input() character?: Character;

  private readonly matDialog = inject(MatDialog);

  onOpenInfoModal(): void {
    this.matDialog.open(CharacterDetailsModalComponent, {
      maxWidth: '700px',
      minWidth: '350px',
      maxHeight: '80vh',

      data: this.character,
    });
  }
}
