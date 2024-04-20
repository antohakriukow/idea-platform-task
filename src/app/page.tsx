'use client';

import { useGetTickets } from '@/hooks/useGetTickets';

export default function Home() {
  const tickets = useGetTickets();

  return (
    <main>
      <div>
        {tickets?.map((ticket) => (
          <p key={ticket.price}>{ticket.priceEUR}</p>
        ))}
      </div>
    </main>
  );
}
