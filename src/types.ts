interface SendSmsRequest {
  to: string;
  from: string;
  message: string;
}

interface SendSmsResponse {
  messageId: string;
  status: string;
}
