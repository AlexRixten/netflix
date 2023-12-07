import { PropsWithChildren } from "react";
import Image from "next/image";

import BackgroundImage from "../../../public/login_background.jpg";
import Logo from "../../../public/netflix_logo.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";
import { ERoutes } from "@/types/enums/routes.enum";

interface IAuthLayout extends PropsWithChildren {}

export default async function AuthLayout({ children }: IAuthLayout) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ERoutes.Me);
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        src={BackgroundImage}
        alt="bg-image"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
