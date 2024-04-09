import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-character-details-info',
  standalone: true,
  imports: [],
  templateUrl: './character-details-info.component.html',
  styleUrl: './character-details-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsInfoComponent {
  @Input() character!: Character;
  @Input() typeInfo!: 'comics' | 'series';

  public readonly changeDetectorRef = inject(ChangeDetectorRef);

  get _typeInfo() {
    if (this.typeInfo === 'series') {
      return this.character.series;
    }
    return this.character.comics;
  }
}
