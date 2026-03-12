import { Request, Response } from "express";
import whatsappService from "../services/whatsappService";

export const sendMessage = async (req: Request, res: Response) => {

  try {

    const { phone, message } = req.body;

    const result = await whatsappService.sendMessage(phone, message);

    res.json({
      success: true,
      result
    });

  } catch (error) {

    res.status(500).json({
      error: "Error enviando mensaje"
    });

  }

};