import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/api/*", cors());

app.get("/api/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/hola", (c) => {
  return c.text("Hi mom");
});

export default {
  port: 3001,
  fetch: app.fetch,
};
