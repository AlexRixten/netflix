import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/auth";
import { ERoutes } from "@/types/enums/routes.enum";
import Navbar from "@/components/navbar/Navbar";

interface IMeLayoutProps extends PropsWithChildren {}

export default async function MeLayout({ children }: IMeLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(ERoutes.SignIn);
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
