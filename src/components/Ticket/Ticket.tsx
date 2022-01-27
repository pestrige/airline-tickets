import React, { FC } from "react";

import { AirplaneSvg, BuySection, BuyText, InfoSection, Inner, LogoWrapper, Stops, StopsText, Wrapper } from "./Ticket.styled";
import { BuyButton } from "../../ui";
import { CarriersMap } from "./carriersMap";
import { formatPrice, getPostfix } from "../../helpers";
import { Info } from "../Info/Info";
import { TicketData } from "../../types/types";

export const Ticket: FC<{ ticket: TicketData }> = ({ticket}) => {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
  } = ticket;
  const Logo = CarriersMap[carrier];

  return (
    <Wrapper>
      <Inner padding="0 20px">
        <BuySection>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <BuyButton>
            <BuyText>Купить</BuyText>
            <span>за {formatPrice(price)} &#8381;</span>
          </BuyButton>
        </BuySection>

        <InfoSection>
          <Info
            airport={origin}
            city={origin_name}
            date={departure_date}
            time={departure_time}
          />
          <Stops>
            <StopsText>
              {stops} {getPostfix(stops)}
            </StopsText>
            <AirplaneSvg />
          </Stops>
          <Info
            airport={destination}
            city={destination_name}
            date={arrival_date}
            time={arrival_time}
            isDestination={true}
          />
        </InfoSection>
      </Inner>
    </Wrapper>
  );
};
