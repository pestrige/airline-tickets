import React, { FC } from "react";
import styled from "styled-components";

import { Ticket } from "../Ticket/Ticket";
import { useTickets } from "../../hooks/useTickets";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const TicketsList: FC = () => {
  const tickets = useTickets();

  return (
    <List>
      {tickets.map((item, id) => (
        <Ticket
          ticket={item}
          key={id.toString()}
        />
      ))}
    </List>
  );
};
