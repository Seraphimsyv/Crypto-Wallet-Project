import { TOKEN } from "../common/contants";
/**
 * Telegram Service
 */
export class TelegramService {
  // Bind Telegram token
  static token: string = TOKEN;
  // Telegram API prepared url
  static url: string = `https://api.telegram.org/bot${this.token}`;
  /**
   * Send message to telegram chat
   * @param chatId 
   * @param message 
   */
  static sendMessage(chatId: number, message: string) {
    return new Promise((resolve, reject) => {
      /** Request headers */
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      /** Request options */
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
      };
      /** Make request and handling response */
      fetch(`${this.url}/sendMessage`, options)
        // Convert response to json object
        .then((res) => res.json())
        // Handling response data
        .then((res) => resolve(true))
        // Catch error in previous handlers
        .catch((err) => reject(false))
    })
  }
}