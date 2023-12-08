import { GenrePage } from "@/pages/genre-page";
import { EGenre } from "@/types/enums/genre";

interface IGenreProps {
  params: { genre: EGenre };
}

export default function Genre({ params }: IGenreProps) {
  return <GenrePage params={params} />;
}
