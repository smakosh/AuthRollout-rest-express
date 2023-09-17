import { User } from "@prisma/client";
import { SessionData } from "express-session";
import jsonwebtoken from "jsonwebtoken";

export interface CustomSessionData extends SessionData {
  token?: string;
}

export type DecodedToken =
  | { data: Pick<User, "id" | "email" | "name"> }
  | jsonwebtoken.JwtPayload
  | undefined;
