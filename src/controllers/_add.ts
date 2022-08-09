import { Request, Response } from "express";
import _add from "../services/add";
import sender from "./functions/sender";

export default async (req: Request, res: Response) => {
  try {
    if (!req.serviletoken?.save) {
      return sender(req, res, { error: { text: "_file:add:notAuthorized" } });
    }

    let files = req.files?.files ?? [];

    if (!files) {
      return sender(req, res, { error: { text: "_file:add:notFileFound" } });
    }

    if (Array.isArray(files)) {
      if (!files.length) {
        return sender(req, res, { error: { text: "_file:add:noFileFound" } });
      }

      files = files[0];
    }

    const id = await _add(files);

    sender(req, res, { value: id });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
