import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

import { CustomSessionData, DecodedToken } from "@/features/auth/types";
import { prisma } from "@/config";

export const meHandler = async (req: Request, res: Response) => {
  const token: string | undefined = (req.session as CustomSessionData).token;
  const userId = (req?.user as any)?.id;

  if (!token && !userId) {
    return res.json({ message: "User already logged out." }).status(400);
  }

  let decodedToken: DecodedToken = undefined;

  if (token) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.JWT_SECRET!
      ) as DecodedToken;
    } catch (err) {}
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decodedToken?.data.id || userId,
    },
    select: {
      email: true,
      id: true,
      name: true,
    },
  });

  return res.json({ user }).status(200);
};
