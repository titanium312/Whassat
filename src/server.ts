import express from "express";
import whatsappRoutes from "./routes/whatsappRoutes";

const app = express();

app.use(express.json());

app.use("/whatsapp", whatsappRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});