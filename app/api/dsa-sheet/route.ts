import { userAuthDetails } from "@/lib/user-auth-details";
import { NextRequest } from "next/server";
import { toggleDsaProblemStatus } from "@/action/toggle-dsa-problem-status";

export async function POST(req: NextRequest) {
  const { providerName, providerId, email } = await userAuthDetails();
  const { problemId } = await req.json();
  return await toggleDsaProblemStatus({
    providerName: providerName || "",
    providerId: providerId || "",
    email: email || "",
    problemId: problemId || "",
  });
}
