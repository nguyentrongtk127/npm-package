import { BinanceExchange } from '../binance';
test('BinanceExchange', () => {
  const bExchange = new BinanceExchange({ key: 'aaa' });
  expect(bExchange.marketOrder('BTC', '1000')).toBe('market order BTC: 1000');
});
