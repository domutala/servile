import { Request, Response } from "express";

export type IResponse = {
  value?: any;
  error?: { text: string };
};

export const token_encrypter = (req: Request, res: Response) => {
  delete req.headers.token;
  delete res.req.headers.token;

  delete res.req.session;
  delete req.session;

  return { req, res };
};

export const jsoniffer = async (
  _req: Request,
  _res: Response,
  data: any,
  status = 200
) => {
  const dup = token_encrypter(_req, _res);
  _req = dup.req;
  _res = dup.res;

  _res.status(status).json(data);
};

export const error = async (_req: Request, _res: Response, error: any) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(_req.url);
    console.log("-------------");
    console.log(error);
  }

  let name = "";

  if (error.text) name = error.text;
  else if (error.name) name = error.name;
  else name = "unknowError";

  name = name.startsWith("_") ? name.slice(1) : name;

  const data = { error: true, name };
  jsoniffer(_req, _res, data);
};

export default async (req: Request, res: Response, response: IResponse) => {
  if (response.error) error(req, res, response.error);
  else jsoniffer(req, res, response.value);
};
