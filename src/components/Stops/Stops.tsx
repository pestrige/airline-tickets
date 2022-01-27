import React, { FC } from "react";
import styled from "styled-components";

import { FILTER_ALL_ID } from "../../types/constants";
import { Stop } from "../Stop/Stop";

const stops = [
  {id: FILTER_ALL_ID, name: "Все"},
  {id: 0, name: "Без пересадок"},
  {id: 1, name: "1 пересадка"},
  {id: 2, name: "2 пересадки"},
  {id: 3, name: "3 пересадки"},
];

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Stops: FC = () => (
  <List>
    {stops.map(({id, name}) => (
      <Stop
        key={id.toString()}
        id={id}
        name={name}
      />
    ))}
  </List>
);
