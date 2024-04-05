import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarvelService } from '../../services/marvel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  marvelService = inject(MarvelService);
  control = new FormControl<string>('');
  inputValue: string | null = null;
  submitted = false;
  apiResults?: any[];

  get showErrorMessage(): boolean {
    return !this.inputValue && this.submitted;
  }

  ngOnInit(): void {
    this.setInputValue();
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.inputValue) {
      return;
    }

    this.getHeroesByName(this.inputValue);
  }

  private setInputValue(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.inputValue = value;
        this.submitted = false;
      });
  }

  private getHeroesByName(name: string): void {
    this.marvelService.getHeroesByName(name).subscribe((res) => {
      console.log(res);
      this.apiResults = res;
    });
  }
}
