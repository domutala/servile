import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import File from "./_entities/File";
import { MFile } from "../models/File";

export interface Params {
  id?: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  if (!Object.keys(params).length) {
    const error = Error();
    error.name = "_file:invalidParams";
    throw error;
  }

  if (typeof params.id !== "string" || params.id.length !== 24) {
    const error = Error();
    error.name = "_file:invalidParams";
    throw error;
  }

  const file = await getMongoRepository(File).findOne({
    where: { _id: { $eq: ObjectID(params.id) } },
  });

  if (file) {
    const object: MFile = { ...(file as unknown as MFile) };
    object.id = object.id.toString();
    return object;
  }

  return;
};
