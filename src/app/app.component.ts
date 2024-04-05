import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
