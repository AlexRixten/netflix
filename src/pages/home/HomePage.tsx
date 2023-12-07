import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";
import { ERoutes } from "@/types/enums/routes.enum";

export const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect(ERoutes.SignIn);
  } else {
    return redirect(ERoutes.Me);
  }
};
