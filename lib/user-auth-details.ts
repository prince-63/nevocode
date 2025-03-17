"use server";

import { cookies } from "next/headers";

export const userAuthDetails = async () => {
  const cookie = await cookies();

  const providerName = cookie.get("provider")?.value;
  const providerId = cookie.get("providerAccountId")?.value;
  const email = cookie.get("userEmail")?.value;

  return { providerName, providerId, email };
};
