import axios from 'axios';

import { IChatbotService } from "./ichatbot.service";
import { ChatbotMessage } from "../../models/chatbotMessage";

export class ChatbotService implements IChatbotService {
  private _baseUrl: string = "";

  private _endpoints = {
    workspace: `${this._baseUrl}/workspace`,
  }
  
  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then(response => response.data as T[]);
  }

  async getMessage(): Promise<ChatbotMessage[]> {
    return this._getEntity<ChatbotMessage>(this._endpoints.workspace);
  }
}