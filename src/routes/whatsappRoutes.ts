import { Router } from "express";
import { sendMessage } from "../controllers/whatsappController";

const router = Router();

router.post("/send", sendMessage);

export default router;