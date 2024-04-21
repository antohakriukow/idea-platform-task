import { FC } from 'react';
import cn from 'clsx';
import styles from './checkbox.module.scss';

export interface Props {
  isChecked: boolean;
  onClick: () => void;
  title: string;
  onOptionalClick?: () => void;
  onOptionalClickTitle?: string;
}

const Checkbox: FC<Props> = ({
  isChecked,
  onClick,
  title,
  onOptionalClick,
  onOptionalClickTitle,
}) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.active]: isChecked,
      })}
    >
      <div
        className={styles.clickArea}
        onClick={onClick}
      >
        <div className={styles.checkbox}>
          {isChecked && <div className={styles.checkmark} />}
        </div>
        <p>{title}</p>
      </div>
      {!!onOptionalClick && (
        <p onClick={onOptionalClick}>{onOptionalClickTitle}</p>
      )}
    </div>
  );
};
export default Checkbox;
