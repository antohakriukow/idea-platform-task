import { FC } from 'react';
import Ticket from './components/ticket/Ticket';
import { ITicket } from '@/shared/types';
import { getTicketKey } from '@/shared/utils';
import { useTypedSelector } from '@/hooks';

interface Props {
  tickets: ITicket[];
}

const Tickets: FC<Props> = ({ tickets }) => {
  const stops = useTypedSelector((state) => state.filters.stops);
  const filteredTickets = tickets
    .filter((ticket) => stops.includes(ticket.stops))
    .sort((a, b) => a.stops - b.stops);

  return (
    <div>
      {!!filteredTickets?.length &&
        filteredTickets.map((ticket) => (
          <Ticket
            key={getTicketKey(ticket)}
            ticket={ticket}
          />
        ))}
    </div>
  );
};
export default Tickets;
