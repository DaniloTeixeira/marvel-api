import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  showLoader$ = inject(LoaderService).showLoader$;
}
