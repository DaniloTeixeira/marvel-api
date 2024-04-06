import { Item } from './Item';

export interface Comic {
  available: number;
  collectionURI: string;
  items: Item[];
}
