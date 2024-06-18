// const express = require("express");
// const bodyParser = require("body-parser");
// const notesRouter = require("./routes/notes-router");
// const errorHandler = require("./middleware/error");
// require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import notesRouter from "./routes/notes-router.js";
import errorHandler from "./middleware/error.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
// const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use("/api/notes", notesRouter);

// set error middleware
app.use(errorHandler);

// buat server nya
app.listen(process.env.APP_PORT, () =>
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`)
);
