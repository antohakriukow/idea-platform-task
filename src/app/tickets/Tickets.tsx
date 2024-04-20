import { FC } from 'react';
import Ticket from './components/ticket/Ticket';
import { ITicket } from '@/shared/types';
import { getTicketKey } from '@/shared/utils';

interface Props {
  tickets: ITicket[];
}

const Tickets: FC<Props> = ({ tickets }) => {
  return (
    <div>
      {!!tickets.length &&
        tickets.map((ticket) => (
          <Ticket
            key={getTicketKey(ticket)}
            ticket={ticket}
          />
        ))}
    </div>
  );
};
export default Tickets;
