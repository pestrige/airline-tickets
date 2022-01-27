import React, { FC } from "react";

import { Currencies, Stops } from "../.";
import { Title, Wrapper } from "./Settings.styled";

export const Settings: FC = () => (
  <Wrapper padding="10px 0">
    <Title>Валюта</Title>
    <Currencies/>
    <Title>Количество пересадок</Title>
    <Stops/>
  </Wrapper>
);
