import { Character } from '../../models/Character';

export const CHARACTER_MOCK: Character = {
  id: 1,
  name: 'Hulk',
  description: 'A super hero with super strength and the power to heal',
  thumbnail: { path: 'path', extension: 'jpg' },
  comics: {
    items: [{ name: 'comic_1' }, { name: 'comic_2' }, { name: 'comic_3' }],
  },
  series: {
    items: [{ name: 'series_1' }, { name: 'series_2' }, { name: 'series_3' }],
  },
};
