import prismaClient from "@/lib/prisma";
import { StatusCodes } from "http-status-codes";
import {
  errorResponse,
  successResponse,
} from "@/utils/general/response-handler";

interface DsaProblemStatusProps {
  providerName: string;
  providerId: string;
  email: string;
}

export async function getDsaProblemStatus({
  providerName,
  providerId,
  email,
}: DsaProblemStatusProps) {
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

  return successResponse({
    statusCode: StatusCodes.OK,
    success: true,
    message: "Dsa problem status fetched successfully",
    data: account.dsaProblemStatus,
  });
}
