import { FC } from 'react';
import { Button, CarrierLogo } from '@/components';
import TicketInfo from '../ticket-info/TicketInfo';
import StopsCount from '../stops-count/StopsCount';
import { ITicket } from '@/shared/types';
import styles from './ticket.module.scss';

interface Props {
  ticket: ITicket;
}
const Ticket: FC<Props> = ({ ticket }) => {
  const handleAddToCart = () => console.log('ticket was added to cart');

  return (
    <div className={styles.container}>
      <div>
        <CarrierLogo carrier={ticket.carrier} />
        <Button
          text={`Купить за ${ticket.price.RUB}`}
          onClick={handleAddToCart}
        />
      </div>
      <div>
        <TicketInfo
          time={ticket.departureTime}
          place={`${ticket.origin}, ${ticket.originName}`}
          date={ticket.departureDate}
        />
        <StopsCount stops={ticket.stops} />
        <TicketInfo
          time={ticket.arrivalTime}
          place={`${ticket.destination}, ${ticket.destinationName}`}
          date={ticket.arrivalDate}
        />
      </div>
    </div>
  );
};
export default Ticket;
