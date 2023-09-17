import { Request, Response } from "express";
import argon2 from "argon2";
import jsonwebtoken from "jsonwebtoken";

import { prisma } from "@/config";
import { CustomSessionData } from "@/features/auth/types";

export const signupHandler = async (req: Request, res: Response) => {
  const user = req.body;

  const hashedPasword = await argon2.hash(user.password);

  const prismaUser = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: hashedPasword,
    },
    select: {
      email: true,
      name: true,
      id: true,
      posts: true,
    },
  });

  const token = jsonwebtoken
    .sign(
      {
        data: {
          id: prismaUser.id,
          email: prismaUser.email,
          name: prismaUser.name,
        },
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    )
    .toString();

  (req.session as CustomSessionData).token = token;

  return res.json({ ...prismaUser, token }).status(200);
};
