import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv-flow";
import express, { Express } from "express";

import { mainRoutes } from "./routes/main.routes";

dotenv.config();
const app: Express = express();

app.use(
  cors({
    origin: process.env.CORS_AUTHORIZED_URLS?.split(","),
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoutes);

const port = parseInt(<string>process.env.PORT, 10) || 3003;
app.listen(port, "", () => {
  console.log(`nextjs stack api running on port ${port}`);
});
