import prismaClient from "@/lib/prisma";
import { StatusCodes } from "http-status-codes";
import {
  errorResponse,
  successResponse,
} from "@/utils/general/response-handler";

interface ToggleProblemStatusProps {
  providerName: string;
  providerId: string;
  email: string;
  problemId: string;
}

export async function toggleDsaProblemStatus({
  providerName,
  providerId,
  email,
  problemId,
}: ToggleProblemStatusProps) {
  const user = await prismaClient.user.findUnique({
    where: { email },
  });

  if (!user) {
    return errorResponse({
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: "User not found",
      error: new Error("User not found"),
    });
  }

  const account = await prismaClient.account.findFirst({
    where: {
      userId: user?.id,
      provider: providerName,
      providerAccountId: providerId,
    },
  });

  if (!account) {
    return errorResponse({
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: "Account not found with the given details",
      error: new Error("Account not found"),
    });
  }

  // check if the problemId is already present in the dsaProblemStatus array then remove it otherwise add it
  if (account?.dsaProblemStatus.includes(problemId)) {
    account.dsaProblemStatus = account?.dsaProblemStatus.filter(
      (id) => id !== problemId,
    );
  } else {
    account?.dsaProblemStatus.push(problemId);
  }

  await prismaClient.account.update({
    where: { id: account?.id },
    data: {
      dsaProblemStatus: account?.dsaProblemStatus,
    },
  });

  return successResponse({
    statusCode: StatusCodes.OK,
    success: true,
    message: "Successfully updated the dsa problem status",
  });
}
