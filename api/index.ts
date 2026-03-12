import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API running" });
});

app.post("/whatsapp/send", (req, res) => {
  const { phone, message } = req.body;

  res.json({
    success: true,
    phone,
    message
  });
});

export default app;