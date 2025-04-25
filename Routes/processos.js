import express from "express";
import { getProcess } from "../Controllers/processos.js";
import { deleteProcess } from "../Controllers/delete.js";
import { postProcess } from "../Controllers/create.js";
import { putProcess } from "../Controllers/update.js";

const router = express.Router()

router.get("/get", getProcess)
router.delete("/delete/:id", deleteProcess)
router.post("/post", postProcess)
router.put("/put/:id", putProcess)

export default router