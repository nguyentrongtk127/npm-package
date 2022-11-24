"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceExchange = void 0;
const coinmap_1 = require("./coinmap");
const futures_order_1 = require("./lib/binance/futures-order");
class BinanceExchange extends coinmap_1.CoinmapExchange {
    constructor(options) {
        super({ db: options.db });
        this.key = options.key;
    }
    marketOrder(symbol, price) {
        const text = `${this.key} request ${symbol}: ${price}`;
        this.logRequest(text);
        const result = (0, futures_order_1.futureMarketOrder)(symbol, price);
        this.logRequest(`${this.key} repsonse ${result}`);
        return text;
    }
}
exports.BinanceExchange = BinanceExchange;
