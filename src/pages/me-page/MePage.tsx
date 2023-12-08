import { Movies } from "@/components/movies";
import { MoviePlayer } from "@/components/movies/movie-player";

export const MePage = () => {
  return (
    <div className="p-5 lg:p-0">
      <MoviePlayer />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <Movies />
    </div>
  );
};
