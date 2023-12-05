"use client";

import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface INextAuthProviderProps extends PropsWithChildren {}

export const NextAuthProvider: FC<INextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
