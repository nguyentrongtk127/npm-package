"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinmapExchange = void 0;
class CoinmapExchange {
    constructor(options) {
        this.db = options.db;
    }
    logRequest(text) {
        console.log(`${this.db}: ${text}`);
    }
}
exports.CoinmapExchange = CoinmapExchange;
