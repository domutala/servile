import { Request, Response } from "express";
import _get from "../services/get";
import sender from "./functions/sender";

export default async (req: Request, res: Response) => {
  try {
    const file = await _get({ orFailed: true, id: req.serviletoken?.id });
    if (!file) return res.send("");
    const _file = Buffer.from(file.params.data, "base64");

    // Create headers
    const headers = {
      "Content-Length": _file.length,
      "Content-Type": file.params.type,
    };

    res.writeHead(200, headers);
    res.end(_file);
  } catch (error: any) {
    sender(req, res, { error });
  }
};
