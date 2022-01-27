import { useEffect, useState } from "react";

import { FILTER_ALL_ID } from "../types/constants";
import ticketsRAW from "../tickets.json";
import { TicketData } from "../types/types";
import { useStoreContext } from "../store/filterStore";

const getFilteredTickets = (filters: number[], tickets: TicketData[]) => {
  if (filters.includes(FILTER_ALL_ID)) {
    return tickets;
  }
  return tickets.filter((item) => filters.includes(item.stops));
};

export const useTickets = () => {
  const {filter} = useStoreContext();
  const [tickets, setTickets] = useState<TicketData[]>([]);

  useEffect(() => {
    try {
      //TODO: replace with real api request
      const tickets = ticketsRAW.tickets.sort((a, b) => a.price - b.price) as TicketData[];
      setTickets(getFilteredTickets(filter, tickets));
    }
    catch {
      setTickets([]);
    }
  }, [filter]);

  return tickets;
};
