import { Character } from './Character';

export interface ApiResponse {
  data: Result;
}

interface Result {
  results: Character[];
}
