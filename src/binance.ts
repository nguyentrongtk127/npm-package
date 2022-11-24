import { CoinmapExchange } from './coinmap';
import { futureMarketOrder } from './lib/binance/futures-order';

export class BinanceExchange extends CoinmapExchange {
  key: string;
  constructor(options: { key: string; db?: string }) {
    super({ db: options.db });
    this.key = options.key;
  }
  marketOrder(symbol: string, price: string): string {
    const text = `${this.key} request ${symbol}: ${price}`;
    this.logRequest(text);
    const result = futureMarketOrder(symbol, price);
    this.logRequest(`${this.key} repsonse ${result}`);
    return result;
  }
}
