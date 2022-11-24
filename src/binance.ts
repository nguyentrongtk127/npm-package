import { CoinmapExchange } from './coinmap';

export class BinanceExchange extends CoinmapExchange {
  key: string;
  constructor(options: { key: string; db: string }) {
    super({ db: options.db });
    this.key = options.key;
  }
  order(): string {
    const text = `${this.key} order ok`;
    this.logRequest(text);
    return text;
  }
}
