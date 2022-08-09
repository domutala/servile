import * as express from "express";
import token from "./middlewares/token";
import _get from "./_get";
import _add from "./_add";

const router = express.Router();

router.use(token);
router.get("/get", _get);
router.post("/add", _add);

export default router;
