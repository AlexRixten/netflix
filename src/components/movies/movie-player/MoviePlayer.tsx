import prisma from "@/utils/db";
import { IMovie } from "@/types/interfaces/movies";
import { MovieButtons } from "@/components/movies/movie-player/movie-buttons";

async function getMove() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
      WatchLists: true,
    },
  });
  return data as IMovie;
}

export const MoviePlayer = async () => {
  const movie = await getMove();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={movie?.imageString}
        autoPlay
        muted
        loop
        src={movie?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {movie?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">
          {movie?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons movie={movie} />
        </div>
      </div>
    </div>
  );
};
