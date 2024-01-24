import Messaging from "./features/messaging";
import Token from "./features/token";

export class TermiiSdk {
  private apiKey: string;
  messaging: Messaging;
  token: Token;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.messaging = new Messaging(this.apiKey);
    this.token = new Token(this.apiKey);
  }
}
