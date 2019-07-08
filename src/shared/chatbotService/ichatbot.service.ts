import { ChatbotMessage } from '../../models/chatbotMessage';

export interface IChatbotService {
  getMessage(): Promise<ChatbotMessage[]>;
}