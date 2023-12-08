"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { IMovie } from "@/types/interfaces/movies";
import { addTowatchlist, deleteFromWatchlist } from "@/app/actions";
import { cn } from "@/lib/utils";
import { MovieModal } from "@/components/movies/movie-modal";

interface IMovieCardProps {
  movie: IMovie;
}
export function MovieCard({ movie }: IMovieCardProps) {
  const { id, WatchLists, age, release, title, duration, overview } =
    movie || {};
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={modalHandler} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        <form action={WatchLists.length ? deleteFromWatchlist : addTowatchlist}>
          <input
            type="hidden"
            name="movieId"
            value={WatchLists.length ? WatchLists[0]?.id : id}
          />
          <input type="hidden" name="pathname" value={pathName || ""} />
          <Button variant="outline" size="icon">
            <Heart
              className={cn("w-4 h-4", { "text-red-500": WatchLists.length })}
            />
          </Button>
        </form>
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{release}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>

      <MovieModal isOpen={isOpen} onClose={modalHandler} movie={movie} />
    </>
  );
}
