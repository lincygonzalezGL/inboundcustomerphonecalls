import express from "express";
import cors from "cors";
import WebSocket from "ws";
import Queue from "./app/services/queue.service";
import popRoutes from "./app/routes/pop.routes";
import { callSchema } from "./app/schemas/call.schema";

require("dotenv").config();

const app = express();

const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";
const PORT = process.env.PORT || 3001;
const processId = process.pid;
const WEB_SOCKET_URL = process.env.WEB_SOCKET_URL || "ws://localhost";
const WEB_SOCKET_PORT = process.env.WEB_SOCKET_PORT || 7777;

app.use(express.json());
app.use(
  express.urlencoded({
    type: "application/x-www-form-urlencoded",
    extended: true,
  })
);
app.use(cors());

const socket = new WebSocket(`${WEB_SOCKET_URL}:${WEB_SOCKET_PORT}`);

socket.on("open", function open() {
  console.log("connected");
});

socket.on("close", function close() {
  console.log("disconnected");
});

socket.on("message", async function incoming(data) {
  const valid = await callSchema.isValid(JSON.parse(data));

  if (valid) {
    Queue.push(JSON.parse(data));
  }
});

app.use("/", popRoutes);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on port ${HOSTNAME}:${PORT} - pid ${processId}`);
});
export default app;
