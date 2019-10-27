import { Track } from './track';

export interface Album {
    name: string;
    coverImage: string;
    tracks: Track[];
}
