'use client';

import Selectors from './selectors/Selectors';
import Tickets from './tickets/Tickets';
import { useGetTickets } from '@/hooks/useGetTickets';

export default function Home() {
  const tickets = useGetTickets();

  return (
    <main>
      <Selectors />
      <Tickets tickets={tickets} />
    </main>
  );
}
