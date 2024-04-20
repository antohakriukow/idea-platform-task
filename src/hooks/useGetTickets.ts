import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ticketService } from '@/shared/services/ticket.service';
import { ITicket } from '@/shared/types/ticket.types';
import { exchangeService } from '@/shared/services/exchange.service';
import { addPricesToTicket } from '@/shared/utils/addPricesToTicket';

export const useGetTickets = () => {
  const exchangeRates = exchangeService.getRates();
  const ticketsData = ticketService.getTickets();

  const tickets = ticketsData.map((ticket) =>
    addPricesToTicket(ticket, exchangeRates),
  );

  return tickets;
};
