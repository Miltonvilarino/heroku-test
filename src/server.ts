import express from "express";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import './shared/container';
import './database';

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/api.docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT || 3333, () => console.log("Server is Running"));
