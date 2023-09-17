import { Request, Response } from "express";
import argon2 from "argon2";
import jsonwebtoken from "jsonwebtoken";

import { prisma } from "@/config";
import { CustomSessionData } from "@/features/auth/types";

export const loginHandler = async (req: Request, res: Response) => {
  const credentials = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    return res
      .json({
        message: "User not found",
      })
      .status(404);
  }

  await argon2.verify(user.password, credentials.password).catch();

  const userToBeReturned = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const token = jsonwebtoken
    .sign(
      {
        data: userToBeReturned,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    )
    .toString();

  (req.session as CustomSessionData).token = token;

  return res.json({ ...userToBeReturned, token }).status(200);
};
