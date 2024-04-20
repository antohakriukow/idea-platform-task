import { FC } from 'react';
import { Text } from '@/components';
import { Size, TextColor } from '@/shared/types';
import { formatDate } from '@/shared/utils';

interface Props {
  time: string;
  place: string;
  date: string;
}

const TicketInfo: FC<Props> = ({ time, place, date }) => {
  return (
    <div>
      <Text
        text={time}
        size={Size.L}
      />
      <Text text={place} />
      <Text
        text={formatDate(date)}
        color={TextColor.LIGHT}
      />
    </div>
  );
};
export default TicketInfo;
