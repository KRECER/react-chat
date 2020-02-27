import {chats, messages} from '../assets/mock-data.json';

export class ApiService {

  static getChats() {
    return chats;
  }

  static getMessages() {
    return messages;
  }

}
