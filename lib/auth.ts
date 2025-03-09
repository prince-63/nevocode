import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      const cookieStore = await cookies();
      // console.log(user, account, profile);
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? "" },
        });

        if (existingUser) {
          const existingProvider = await prisma.account.findFirst({
            where: {
              userId: existingUser.id,
              provider: account?.provider ?? "",
              providerAccountId: account?.providerAccountId ?? "",
            },
          });

          if (!existingProvider) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: account?.provider ?? "unknown",
                providerAccountId: account?.providerAccountId ?? "unknown",
                accessToken: account?.access_token ?? null,
              },
            });

            cookieStore.set("provider", account?.provider || "");
            cookieStore.set(
              "providerAccountId",
              account?.providerAccountId || "",
            );
            return true;
          }

          if (existingProvider?.id) {
            await prisma.account.update({
              where: { id: existingProvider.id },
              data: {
                accessToken:
                  account?.access_token ?? existingProvider.accessToken,
              },
            });
          }

          cookieStore.set("provider", account?.provider || "");
          cookieStore.set(
            "providerAccountId",
            account?.providerAccountId || "",
          );
          return true;
        }

        const newUser = await prisma.user.create({
          data: {
            email: user.email ?? "",
            name: user.name ?? "Unknown User",
            image: user.image ?? null,
          },
        });

        await prisma.account.create({
          data: {
            userId: newUser.id,
            provider: account?.provider ?? "unknown",
            providerAccountId: account?.providerAccountId ?? "unknown",
            accessToken: account?.access_token ?? null,
          },
        });

        cookieStore.set("provider", account?.provider || "");
        cookieStore.set("providerAccountId", account?.providerAccountId || "");
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
  secret: process.env.AUTH_SECRET!,
};
