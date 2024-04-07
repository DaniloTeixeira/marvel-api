import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { CharacterDescriptionComponent } from '../../components/character-description';
import { Character } from '../../models/Character';
import { LocalStorageService } from '../../services/local-storage';
import { MarvelService } from '../../services/marvel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CharacterDescriptionComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly marvelService = inject(MarvelService);
  private readonly localStorageService = inject(LocalStorageService);

  public readonly control = new FormControl<string>('');

  public character?: Character;
  public loading = false;
  public showErrorMessage = false;
  public inputValue: string | null = null;
  public showCharacterNotFoundMessage = false;

  get showCharacterInfo(): boolean {
    return !!(this.character && !this.loading);
  }

  ngOnInit(): void {
    this.setInputValue();
    this.localStorageService.getStoredCharacters();
  }

  onSubmit(): void {
    this.showCharacterNotFoundMessage = false;

    if (!this.inputValue) {
      this.showErrorMessage = true;
      return;
    }

    this.getCharactersByName(this.inputValue);
  }

  private setInputValue(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (value) {
          this.showErrorMessage = false;
        } else {
          this.showCharacterNotFoundMessage = false;
        }

        this.inputValue = value;
      });
  }

  private getCharactersByName(name: string): void {
    this.loading = true;

    this.marvelService
      .getCharacterByName(name.trim())
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        if (!res) {
          this.showCharacterNotFoundMessage = true;
        }
        this.character = res;
      });
  }
}
