import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader';
import { InfinityStonesComponent } from '../infinity-stones';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, InfinityStonesComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  public showLoader$ = inject(LoaderService).showLoader$;
}
