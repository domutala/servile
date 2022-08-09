import * as express from "express";
import controllers from "./controllers";

export const init = async (router: express.Router) => {
  router.use("/servile", controllers);
};
