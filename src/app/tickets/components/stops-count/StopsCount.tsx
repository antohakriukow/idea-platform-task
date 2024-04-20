import { FC } from 'react';
import { IoAirplane } from 'react-icons/io5';
import { Text } from '@/components';
import { getStopsCountText } from '@/shared/utils';
import { Size, ITicket } from '@/shared/types';
import { COLOR_GRAY_300 } from '@/shared/styles/colors';
import styles from './stops-count.module.scss';

interface Props extends Pick<ITicket, 'stops'> {}

const StopsCount: FC<Props> = ({ stops }) => (
  <div className={styles.container}>
    <Text
      text={getStopsCountText(stops)}
      isUppercase
      size={Size.S}
    />
    <div>
      <line />
      <IoAirplane
        size={16}
        color={COLOR_GRAY_300}
      />
    </div>
  </div>
);

export default StopsCount;
