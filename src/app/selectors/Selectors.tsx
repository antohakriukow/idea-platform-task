import { FC } from 'react';

import styles from './selectors.module.scss';
import { Switcher, Text } from '@/components';
import { Currency } from '@/shared/types';
import { useActions, useTypedSelector } from '@/hooks';

const Selectors: FC = () => {
  const currency = useTypedSelector((state) => state.global.currency);
  const { setGlobalCurrency } = useActions();

  const setCurrent = (option: string) => setGlobalCurrency(option as Currency);

  return (
    <div className={styles.container}>
      <Text
        text='Валюта'
        isUppercase
        isSemiBold
      />
      <Switcher
        options={Object.keys(Currency) as string[]}
        current={currency}
        setCurrent={setCurrent}
      />
    </div>
  );
};
export default Selectors;
