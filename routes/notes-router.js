import { createData, readData, updateData, deleteData } from "../controllers/notes-controller.js";

import express from "express";
const router = express.Router();

router.route("/").post(createData).get(readData);

router.route("/:id").get(readData).put(updateData).delete(deleteData);

export default router;
