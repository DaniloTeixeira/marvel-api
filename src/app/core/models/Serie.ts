import { Item } from './Item';

export interface Serie {
  available: number;
  collectionURI: string;
  items: Item[];
}
