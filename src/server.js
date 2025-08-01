const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const user = require("./controllers/user.controller.js");
const bodyParser = require("body-parser");
const connectDB = require("./db/conn.js");
const { swaggerUi, swaggerSpec } = require("../swagger.js");
dotenv.config();

const app = express();
connectDB();

dotenv.config({ path: path.join(__dirname, ".env") });
const port = process.env.PORT || 5050;
const hostname = process.env.HOST_NAME;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const options = {};

const server = http.createServer(options, app).listen(port, hostname, () => {
  console.log(`HTTP Server listening on https://${hostname}:${port}`);
});
app.use("/user/api/v1", user);
