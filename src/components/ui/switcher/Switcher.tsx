import { FC } from 'react';
import Option from './Option';
import { SwitcherProps } from './switcher.types';
import styles from './switcher.module.scss';

const Switcher: FC<SwitcherProps> = ({ options, current, setCurrent }) => {
  return (
    <div className={styles.container}>
      {!!options.length &&
        options.map((option) => (
          <Option
            key={option}
            option={option}
            setCurrent={setCurrent}
            isCurrent={option === current}
          />
        ))}
    </div>
  );
};
export default Switcher;
