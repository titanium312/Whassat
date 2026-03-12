import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "API running" });
});

export default app;