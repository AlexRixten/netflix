import prisma from "@/utils/db";
import { MovieCard } from "@/components/movies/movie-card";
import { IMovie } from "@/types/interfaces/movies";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

async function getWatchList(userId: string) {
  return prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
}

export const WatchListPage = async () => {
  const session = await getServerSession(authOptions);
  const watchList = await getWatchList(session?.user?.email as string);
  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {watchList.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />

                <MovieCard movie={movie.Movie as IMovie} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
