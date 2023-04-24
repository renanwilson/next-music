export interface IRecentsTracks {
  artists: [
    {
      name: string;
    }
  ];
  album: IAlbuns;
  name: string;
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
