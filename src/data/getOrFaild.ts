import get, { Params } from "./get";

/**
 * @author domutala
 * @description trouver une sssion
 * @version 0.2.0
 */
export default async (params: Params) => {
  const file = await get(params);

  if (!file) {
    const error = Error();
    error.name = "_file:notFound";
    throw error;
  }

  return file;
};
