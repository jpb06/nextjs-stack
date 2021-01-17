import express from "express";

export const mainRoutes = express.Router();

mainRoutes.get("/", (req, res) => res.send("This is My day Api!"));
