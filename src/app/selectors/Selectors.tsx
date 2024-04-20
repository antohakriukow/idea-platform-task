import { FC } from 'react';

import styles from './selectors.module.scss';
import { Switcher, Text } from '@/components';
import { Currency } from '@/shared/types';
import { useActions, useTypedSelector } from '@/hooks';
import CheckboxGroup from '@/app/selectors/components/CheckboxGroup';

interface Props {
  options: number[];
}

const Selectors: FC<Props> = ({ options }) => {
  const currency = useTypedSelector((state) => state.global.currency);
  const stops = useTypedSelector((state) => state.filters.stops);
  const { setGlobalCurrency, setStopsCount } = useActions();

  const setCurrent = (option: string) => setGlobalCurrency(option as Currency);

  return (
    <div className={styles.container}>
      <div>
        <Text
          text='валюта'
          isUppercase
          isSemiBold
        />
        <Switcher
          options={Object.keys(Currency) as string[]}
          current={currency}
          setCurrent={setCurrent}
        />
      </div>
      <div>
        <Text
          text='количество пересадок'
          isUppercase
          isSemiBold
        />
        <CheckboxGroup<number>
          options={options}
          currentOptions={stops}
          setOptions={setStopsCount}
        />
      </div>
    </div>
  );
};
export default Selectors;
