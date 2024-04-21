import { TypeExchangeRates } from '../types';

class ExchangeService {
  private USD_RATE = 32;

  private EUR_RATE = 42;

  getRates(): TypeExchangeRates {
    return { USD: this.USD_RATE, EUR: this.EUR_RATE };
  }
}
export const exchangeService = new ExchangeService();
