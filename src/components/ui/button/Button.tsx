import { FC } from 'react';
import Text from '../text/Text';
import { TextColor } from '@/shared/types';
import { COLOR_GRAY_300, COLOR_SECONDARY } from '@/shared/styles/colors';
import styles from './button.module.scss';

interface Props {
  text: string;
  color?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  text,
  color = COLOR_SECONDARY,
  onClick,
  disabled,
}) => {
  const buttonColor = disabled ? COLOR_GRAY_300 : color;

  return (
    <button
      className={styles.button}
      style={{ background: buttonColor }}
      onClick={onClick}
      disabled={disabled}
    >
      <Text
        text={text}
        color={TextColor.WHITE}
      />
    </button>
  );
};
export default Button;
