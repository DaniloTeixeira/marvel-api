import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comic } from '../../models/Comic';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-character-details-info',
  standalone: true,
  imports: [],
  templateUrl: './character-details-info.component.html',
  styleUrl: './character-details-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsInfoComponent {
  @Input() character!: Comic | Serie;
}
