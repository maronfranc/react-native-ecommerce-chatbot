import { USER_ADD_MESSAGE, CHATBOT_ADD_MESSAGE } from './actionTypes';

export const userAddMessage = () => {
  return {
    type: USER_ADD_MESSAGE,
    payload: 'payload'
  }
}

export const chatbotAddMessage = () => {
  return {
    type: CHATBOT_ADD_MESSAGE,
    payload: 'payload'
  }
}