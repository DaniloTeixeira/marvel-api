import { Comic } from './Comic';
import { Serie } from './Serie';
import { Thumbnail } from './Thumbnail';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comic;
  series: Serie;
}
