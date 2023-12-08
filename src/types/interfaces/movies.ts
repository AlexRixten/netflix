export interface IMovie {
  id: number;
  imageString: string;
  title: string;
  age: number;
  duration: number;
  overview: string;
  release: number;
  videoSource: string;
  category: string;
  youtubeString: string;
  WatchLists: IWatch[];
  createdAt: Date;
}

export interface IWatch {
  id: string;
  userId: string;
  Movie: IMovie;
  movieId: number;
}
