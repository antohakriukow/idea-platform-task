import { FC } from 'react';
import { Switcher, Text } from '@/components';
import { Currency } from '@/shared/types';
import styles from '../selectors.module.scss';

interface Props {
  currency: Currency;
  setCurrency: (option: string) => {
    payload: Currency;
    type: 'global/setGlobalCurrency';
  };
}
const CurrencySwitcher: FC<Props> = ({ currency, setCurrency }) => {
  return (
    <div className={styles.currency}>
      <Text
        text='валюта'
        isUppercase
        isSemiBold
      />
      <Switcher
        options={Object.keys(Currency) as string[]}
        current={currency}
        setCurrent={setCurrency}
      />
    </div>
  );
};
export default CurrencySwitcher;
