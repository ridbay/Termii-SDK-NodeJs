import axios from "axios";
/**

 * @class Messaging
 * @param {string} apiKey - The public key of the merchant

 */
class Messaging {
  public base_url: string;
  private apiKey: string;
  private options: { headers: { Authorization: string } };

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.base_url = "https://api.ng.termii.com/api";
    this.options = {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    };
  }

  public async fetch_sender_id(sender_id: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.base_url}/${sender_id}?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {}
  }

  public async request_sender_id(
    sender_id: string,
    usecase: string,
    company: string
  ) {
    try {
      const data = { api_key: this.apiKey, sender_id, usecase, company };
      const jsonData = JSON.stringify(data);
      const response: any = axios.post(
        `${this.base_url}/sender-id/request`,
        jsonData
      );

      return response.data;
    } catch (error) {}
  }
  public async sendSms(
    phone_number: string,
    sender_id: string,
    channel: string,
    message: string
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      to: phone_number,
      from: sender_id,
      channel,
      sms: message,
      type: "plain",
      // media: {
      //   url: "https://media.example.com/file",
      //   caption: "your media file",
      // },
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/send`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async sendBulkSms(
    phone_numbers: string[],
    sender_id: string,
    channel: string,
    message: string
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      to: phone_numbers,
      from: sender_id,
      channel,
      sms: message,
      type: "plain",
      // media: {
      //   url: "https://media.example.com/file",
      //   caption: "your media file",
      // },
    };

    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/send/bulk`,
      jsonData,
      this.options
    );

    return response.data;
  }
}

export default Messaging;
