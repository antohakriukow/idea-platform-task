import { ticketService } from '@/shared/services/ticket.service';
import { exchangeService } from '@/shared/services/exchange.service';
import { addPricesToTicket } from '@/shared/utils';

export const useGetTickets = () => {
  const exchangeRates = exchangeService.getRates();
  const ticketsData = ticketService.getTickets();

  const tickets = ticketsData.map((ticket) =>
    addPricesToTicket(ticket, exchangeRates),
  );

  return tickets;
};
