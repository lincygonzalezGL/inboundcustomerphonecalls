import * as express from "express";
import popController from "../controllers/pop.controller";

const router = express.Router();
router.delete("/pop", popController.delete);

export default router;
