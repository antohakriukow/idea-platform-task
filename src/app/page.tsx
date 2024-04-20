'use client';

import { createSet } from '@/shared/utils';
import Selectors from './selectors/Selectors';
import Tickets from './tickets/Tickets';
import { useGetTickets } from '@/hooks';

export default function Home() {
  const tickets = useGetTickets();
  const options = createSet(tickets.map((ticket) => ticket.stops)).sort();

  return (
    <main>
      <Selectors options={options} />
      <Tickets tickets={tickets} />
    </main>
  );
}
