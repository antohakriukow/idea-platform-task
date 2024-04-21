import { FC, useState } from 'react';
import CurrencySwitcher from './components/CurrencySwitcher';
import StopsCountSetter from './components/StopsCountSetter';
import DropDownHandler from './components/DropDownHandler';
import { Currency } from '@/shared/types';
import { useActions, useTypedSelector } from '@/hooks';
import styles from './selectors.module.scss';

interface Props {
  options: number[];
}

const Selectors: FC<Props> = ({ options }) => {
  const [isShown, setIsShown] = useState(true);
  const { setGlobalCurrency, setStopsCount } = useActions();
  const currency = useTypedSelector((state) => state.global.currency);
  const stops = useTypedSelector((state) => state.filters.stops);

  const setCurrency = (option: string) => setGlobalCurrency(option as Currency);

  return (
    <div className={styles.container}>
      <DropDownHandler
        isShown={isShown}
        setIsShown={setIsShown}
      />
      {isShown && (
        <>
          <CurrencySwitcher
            currency={currency}
            setCurrency={setCurrency}
          />
          <StopsCountSetter
            options={options}
            stops={stops}
            setStopsCount={setStopsCount}
          />
        </>
      )}
    </div>
  );
};
export default Selectors;
