import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Image from "next/image";
import prisma from "@/utils/db";
import { FC } from "react";
import { MovieCard } from "@/components/movies/movie-card";
import { IMovie } from "@/types/interfaces/movies";
import { genresMock } from "@/mock-data/genres";
import { EGenre } from "@/types/enums/genre";

interface IGenrePageProps {
  params: { genre: EGenre };
}

async function getMovieByCategory(category: string, userId: string) {
  const data = await prisma.movie.findMany({
    where: {
      category: category,
    },
    select: {
      age: true,
      duration: true,
      id: true,
      title: true,
      release: true,
      imageString: true,
      overview: true,
      youtubeString: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
    },
  });

  return data as IMovie[];
}

export const GenrePage: FC<IGenrePageProps> = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const data = await getMovieByCategory(
    genresMock[params.genre],
    session?.user?.email as string,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard movie={movie} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
