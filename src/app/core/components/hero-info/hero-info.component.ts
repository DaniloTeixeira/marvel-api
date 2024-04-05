import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInfoComponent implements OnInit {
  @Input() heroInfo: any;
  src!: string;
  imageLoaded = false;

  ngOnInit(): void {
    this.setSrcImage();
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  private setSrcImage(): void {
    this.src = `${this.heroInfo[0].thumbnail.path}.${this.heroInfo[0].thumbnail.extension}`;
  }
}
