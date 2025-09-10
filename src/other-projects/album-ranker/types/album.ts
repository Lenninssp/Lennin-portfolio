
export interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  idLyric: string;
  idIMVDB: string | null;

  strTrack: string;
  strAlbum: string;
  strArtist: string;
  strArtistAlternate: string | null;

  intCD: string | null;
  intDuration: string | null;
  strGenre: string | null;
  strMood: string | null;
  strStyle: string | null;
  strTheme: string | null;

  // Descriptions in multiple languages
  strDescriptionEN: string | null;

  // Media info
  strTrackThumb: string | null;
  strTrack3DCase: string | null;
  strTrackLyrics: string | null;

}


export type Album = {
  track: Track[];
}
