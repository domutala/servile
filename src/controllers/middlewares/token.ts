import { NextFunction, Request, Response } from "express";
import * as jwtoken from "jsonwebtoken";
import sender from "../functions/sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.query.token as string;
    if (token && token.split(" ")[0] === "Bearer") token = token.split(" ")[1];

    if (token) {
      const private_key = process.env.PUBLIC_KEY?.replace(
        /\\n/gi,
        "\n"
      ) as string;

      const tk = jwtoken.verify(
        token,
        Buffer.from(private_key, "base64")
      ) as any;

      req.serviletoken = tk;
    }

    next();
  } catch (error: any) {
    return sender(req, res, { error });
  }
};
