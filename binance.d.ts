import { CoinmapExchange } from './coinmap';
export declare class BinanceExchange extends CoinmapExchange {
    key: string;
    constructor(options: {
        key: string;
        db: string;
    });
    marketOrder(symbol: string, price: string): string;
}
