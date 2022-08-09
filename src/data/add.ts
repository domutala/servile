import { MFileParams } from "../models/File";
import File from "./_entities/File";
import _get from "./getOrFaild";

const test = async (params: MFileParams) => {
  const re = /(data:[^;]+\/[^;]+;base64[^"]+)/g;

  if (!re.test(params.data)) {
    const error = Error();
    error.name = "_file:add:invalidFile";
    throw error;
  }

  return true;
};

/**
 * @author domutala
 */
export default async (params: MFileParams) => {
  await test(params);

  const file = new File();
  file.params = params;

  await file.save();

  return await _get({ id: file.id.toString() });
};
