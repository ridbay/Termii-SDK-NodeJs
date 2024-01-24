import axios from "axios";
/**

 * @class Messaging
 * @param {string} apiKey - The public key of the merchant

 */
class Token {
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

  public async sendToken(
    phone_number: string,
    sender_id: string,
    channel: string,
    message_type: string,
    pin_attempts: number,
    pin_time_to_live: number,
    pin_length: number,
    pin_placeholder: string,
    message_text: string,
    pin_type: string
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      to: phone_number,
      from: sender_id,
      channel,
      message_type,
      pin_attempts,
      pin_time_to_live,
      pin_length,
      pin_placeholder,
      message_text,
      pin_type,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/otp/send`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async sendVoiceToken(
    phone_number: string,
    pin_attempts: number | string,
    pin_time_to_live: number,
    pin_length: number
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      phone_number,
      pin_attempts,
      pin_time_to_live,
      pin_length,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/otp/send/voice`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async voiceCall(phone_number: string, code: string): Promise<any> {
    const data = {
      api_key: this.apiKey,
      phone_number,
      code,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/otp/call`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async emailToken(
    email_address: string,
    code: string,
    email_configuration_id: string
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      email_address,
      code,
      email_configuration_id,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/email/otp/send`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async verifyToken(pin_id: string, pin: string): Promise<any> {
    const data = {
      api_key: this.apiKey,
      pin_id,
      pin,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/otp/verify`,
      jsonData,
      this.options
    );

    return response.data;
  }
  public async inAppToken(
    phone_number: string,
    pin_attempts: number,
    pin_time_to_live: number,
    pin_length: number,
    pin_type: string
  ): Promise<any> {
    const data = {
      api_key: this.apiKey,
      pin_type,
      phone_number,
      pin_attempts,
      pin_time_to_live,
      pin_length,
    };
    const jsonData = JSON.stringify(data);
    const response = await axios.post(
      `${this.base_url}/sms/otp/generate`,
      jsonData,
      this.options
    );

    return response.data;
  }
}

export default Token;
