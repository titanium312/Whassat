import express from "express";
import whatsappRoutes from "../src/routes/whatsappRoutes";

const app = express();

app.use(express.json());
app.use("/whatsapp", whatsappRoutes);

export default app;