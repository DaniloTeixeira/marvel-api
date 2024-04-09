import { Comic } from './Comic';
import { Series } from './Series';
import { Thumbnail } from './Thumbnail';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comic;
  series: Series;
}
