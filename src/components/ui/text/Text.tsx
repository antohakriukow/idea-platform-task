import { FC } from 'react';
import cn from 'clsx';
import { Size, TextColor } from '@/shared/types';
import styles from './text.module.scss';

interface Props {
  size?: Size;
  text: string;
  color?: TextColor;
  isUppercase?: boolean;
}

const Text: FC<Props> = ({
  text,
  size = Size.M,
  color = TextColor.DEFAULT,
  isUppercase = false,
}) => {
  return (
    <p
      style={{ color }}
      className={cn(styles.text, {
        [styles.large]: size === Size.L,
        [styles.small]: size === Size.S,
        [styles.textUppercase]: isUppercase,
      })}
    >
      {text}
    </p>
  );
};
export default Text;
