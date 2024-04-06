import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.scss',
})
export class HeroInfoComponent implements OnInit {
  @Input() heroInfo: any;

  private matDialog = inject(MatDialog);

  src!: string;
  imageLoaded = false;

  ngOnInit(): void {
    this.setImageSrc();
  }

  onOpenInfoModal(): void {
    this.matDialog.open(DetailsModalComponent, {
      maxWidth: '700px',
      minWidth: '300px',
      data: this.heroInfo,
    });
  }

  onLoadImage(): void {
    this.imageLoaded = true;
  }
  private setImageSrc(): void {
    this.src = `${this.heroInfo[0].thumbnail.path}.${this.heroInfo[0].thumbnail.extension}`;
  }
}
