import React, { FC } from "react";

import { Date, Point, Time } from "./Info.styled";
import { formatDate } from "../../helpers";

interface InfoProps {
  airport: string;
  city: string;
  date: string;
  time: string;
  isDestination?: boolean;
}

export const Info: FC<InfoProps> = ({
  airport,
  city,
  date,
  time,
  isDestination = false,
}) => {

  return (
    <div>
      <Time>
        {time}
      </Time>
      <Point>
        {isDestination
          ? `${city}, ${airport}`
          : `${airport}, ${city}`
        }
      </Point>
      <Date>
        {formatDate(date)}
      </Date>
    </div>
  );
};
