import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";



class WhatsAppService {

  private client: Client;

  constructor() {

    this.client = new Client({
      authStrategy: new LocalAuth()
    });

    this.initialize();
  }

  private initialize() {

    this.client.on("qr", (qr) => {
      console.log("Escanea el QR:");
      qrcode.generate(qr, { small: true });
    });

    this.client.on("ready", () => {
      console.log("WhatsApp listo");
    });

    this.client.initialize();
  }

  async sendMessage(phone: string, message: string) {

    const chatId = `${phone}@c.us`;

    await this.client.sendMessage(chatId, message);

    return "Mensaje enviado";
  }
}

export default new WhatsAppService();