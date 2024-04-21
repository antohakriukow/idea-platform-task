import { Dispatch, FC, SetStateAction } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Text } from '@/components';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';
import styles from '../selectors.module.scss';

interface Props {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

const DropDownHandler: FC<Props> = ({ isShown, setIsShown }) => {
  const toggleShown = () => setIsShown(!isShown);
  const text = isShown ? 'Скрыть фильтры' : 'Показать фильтры';

  return (
    <div
      className={styles.handler}
      onClick={toggleShown}
    >
      <Text
        text={text}
        isUppercase
        isSemiBold
      />
      {isShown ? (
        <IoIosArrowUp
          size={18}
          color={COLOR_PRIMARY_500}
        />
      ) : (
        <IoIosArrowDown
          size={18}
          color={COLOR_PRIMARY_500}
        />
      )}
    </div>
  );
};
export default DropDownHandler;
