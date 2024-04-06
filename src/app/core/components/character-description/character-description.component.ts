import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
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
})
export class CharacterDescriptionComponent {
  @Input() character?: Character;

  private matDialog = inject(MatDialog);

  src!: string;
  imageLoaded = false;

  ngOnInit(): void {
    this.setImageSrc();
  }

  onOpenInfoModal(): void {
    this.matDialog.open(CharacterDetailsModalComponent, {
      maxWidth: '700px',
      minWidth: '350px',

      data: this.character,
    });
  }

  onLoadImage(): void {
    this.imageLoaded = true;
  }
  private setImageSrc(): void {
    this.src = `${this.character?.thumbnail.path}.${this.character?.thumbnail.extension}`;
  }
}
