import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

export const HomePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div>{session?.user?.name}</div>
    </div>
  );
};
