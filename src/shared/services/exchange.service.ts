import { IExchangeRates } from '../types/exchange.types';

class ExchangeService {
  private USD_RATE = 32;

  private EUR_RATE = 42;

  getRates(): IExchangeRates {
    return { usd: this.USD_RATE, eur: this.EUR_RATE };
  }
}
export const exchangeService = new ExchangeService();
