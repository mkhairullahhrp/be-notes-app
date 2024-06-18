import {
  createData,
  readData,
  updateData,
  deleteData,
  readDataById,
} from "../controllers/notes-controller.js";

import express from "express";
const router = express.Router();

router.route("/").post(createData).get(readData);

router.route("/:id").get(readDataById).put(updateData).delete(deleteData);

export default router;
