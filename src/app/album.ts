import { Track } from './track';

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
