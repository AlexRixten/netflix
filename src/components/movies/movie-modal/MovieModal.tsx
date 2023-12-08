import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IMovie } from "@/types/interfaces/movies";

interface IMovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: IMovie;
}

export const MovieModal: FC<IMovieModalProps> = ({
  isOpen,
  onClose,
  movie,
}) => {
  const { title, overview, release, duration, age, youtubeString } =
    movie || {};
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-o.5 px-1 border-gray-200 rounded">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeString} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};
