import { FC } from 'react';
import cn from 'clsx';
import { OptionProps } from './switcher.types';
import styles from './switcher.module.scss';

const Option: FC<OptionProps> = ({ option, isCurrent, setCurrent }) => (
  <p
    onClick={() => setCurrent(option)}
    className={cn(styles.option, {
      [styles.active]: isCurrent,
    })}
  >
    {option}
  </p>
);

export default Option;
