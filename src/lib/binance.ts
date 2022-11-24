import { CoinmapExchange } from './coinmap';
import { futureMarketOrder } from './binance/futures-order';

export class BinanceExchange extends CoinmapExchange {
  key: string;
  constructor(key: string, options?: { db?: string }) {
    super(options);
    this.key = key;
  }
  marketOrder(symbol: string, price: string): string {
    const text = `${this.key} request ${symbol}: ${price}`;
    this.logRequest(text);
    const result = futureMarketOrder(symbol, price);
    this.logRequest(`${this.key} repsonse ${result}`);
    return result;
  }
}
