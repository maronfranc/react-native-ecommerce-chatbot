import { IChatbotService } from "./ichatbot.service";
import { ChatbotMessage } from "../../models/chatbotMessage";


export class ChatbotFacade {
  constructor(private _service: IChatbotService) {

  }

  // async getMessage(userId: number): Promise<ChatbotMessage | null> {

  // }
}