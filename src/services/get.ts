import _get, { Params as DParams } from "../data/get";
import _getOrfailed from "../data/getOrFaild";

interface Params extends DParams {
  orFailed?: boolean;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  const file = params.orFailed
    ? await _getOrfailed(params)
    : await _get(params);

  return file;
};
