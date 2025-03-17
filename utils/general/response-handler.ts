import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

interface SuccessResponse<T> {
  statusCode: StatusCodes;
  success: true;
  message: string;
  data?: T;
}

interface ErrorResponse {
  statusCode: StatusCodes;
  success: false;
  message: string;
  error: Error;
}

export const successResponse = <T>({
  statusCode,
  success,
  message,
  data,
}: SuccessResponse<T>) => {
  return NextResponse.json(
    { success: success, message, data },
    { status: statusCode },
  );
};

export const errorResponse = ({
  statusCode,
  success,
  message,
  error,
}: ErrorResponse) => {
  return NextResponse.json(
    { success: success, message, error },
    { status: statusCode },
  );
};
