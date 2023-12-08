"use client";

import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { MovieModal } from "@/components/movies/movie-modal";
import { IMovie } from "@/types/interfaces/movies";

interface IMovieButtonsProps {
  movie: IMovie;
}

export const MovieButtons: FC<IMovieButtonsProps> = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={modalHandler} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={modalHandler}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <MovieModal isOpen={isOpen} onClose={modalHandler} movie={movie} />
    </>
  );
};
