export class CoinmapExchange {
  db?: string;
  constructor(options: { db?: string }) {
    this.db = options.db;
  }
  logRequest(text: string): void {
    console.log(`${this.db}: ${text}`);
  }
}
