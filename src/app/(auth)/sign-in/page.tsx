import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ERoutes } from "@/types/enums/routes";

export default function SignIn() {
  return (
    <div className="mt-24  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        New to Neflix?
        <Link className="text-white hover:underline" href={ERoutes.SignUp}>
          Sign up now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        {/*<GithubSignInButton />*/}
        {/*<GoogleSignInButton />*/}
      </div>
    </div>
  );
}
