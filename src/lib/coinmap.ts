export class CoinmapExchange {
  db?: string;
  constructor(options?: { db?: string }) {
    this.db = options?.db;
  }
  logRequest(text: string): void {
    const message = this.db ? `${this.db}: ${text}` : text;
    console.log(message);
  }
}
