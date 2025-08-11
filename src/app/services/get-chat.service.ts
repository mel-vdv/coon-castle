import { Injectable } from '@angular/core';
import { Chat } from '../chat';

@Injectable({
  providedIn: 'root'
})
export class GetChatService {

  constructor() { }

  chat?: Chat;
  setChat(value: Chat) {
    this.chat = value;
  }
  getChat(): Chat | null{
    return this.chat ?? null;
  }
}
