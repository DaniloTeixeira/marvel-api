import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroInfoComponent } from '../../components/hero-info';
import { MarvelService } from '../../services/marvel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HeroInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private marvelService = inject(MarvelService);

  apiResults?: any[];
  showErrorMessage = false;
  showHeroNotFoundMessage = false;
  inputValue: string | null = null;
  control = new FormControl<string>('');

  ngOnInit(): void {
    this.setInputValue();
  }

  onSubmit(): void {
    this.showHeroNotFoundMessage = false;

    if (!this.inputValue) {
      this.showErrorMessage = true;
      return;
    }

    this.getHeroesByName(this.inputValue);
  }

  private setInputValue(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (value) {
          this.showErrorMessage = false;
        } else {
          this.showHeroNotFoundMessage = false;
        }

        this.inputValue = value;
      });
  }

  private getHeroesByName(name: string): void {
    this.marvelService.getHeroesByName(name).subscribe((res) => {
      if (res.length === 0) {
        this.showHeroNotFoundMessage = true;
      }
      console.log(res);
      this.apiResults = res;
    });
  }
}
