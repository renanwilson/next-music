export interface ITracks {
  items: IItems[];
}
export interface IItems {
  name: string;
  album: IAlbuns;
  artists: IArtists[];
  id: string;
  uri: string;
}
interface IAlbuns {
  images: IImages[];
}
interface IImages {
  url: string;
  height: number;
  width: number;
}
interface IArtists {
  external_urls: {
    spotify: string;
  };
  name: string;
}
