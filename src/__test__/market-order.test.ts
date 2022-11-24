import { BinanceExchange } from '../../lib/binance';
test('BinanceExchange', () => {
  const bExchange = new BinanceExchange('key123');
  expect(bExchange.marketOrder('BTC', '1000')).toBe('market order BTC: 1000');
});
