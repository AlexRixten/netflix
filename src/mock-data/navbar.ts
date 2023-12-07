import { ERoutes } from "@/types/enums/routes.enum";

interface linkProps {
  name: string;
  href: ERoutes;
}

export const navbarMock: linkProps[] = [
  { name: "Home", href: ERoutes.Me },
  { name: "Tv Shows", href: ERoutes.Shows },
  { name: "Movies", href: ERoutes.Movies },
  { name: "Recently Added", href: ERoutes.Recently },
  { name: "My List", href: ERoutes.WatchList },
];
