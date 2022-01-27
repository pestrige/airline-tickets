import React, { FC } from "react";
import styled from "styled-components";

import { AirplaneCircle } from "./svg";
import { Settings, TicketsList } from "./components";
import { FilterStoreProvider, CurrencyStoreProvider } from "./store";

const Main = styled.div`
  min-height: 100vh;
  padding-top: 60px;
  background-color: ${({theme}) => theme.colors.background};
`;

const Logo = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    padding: 30px;
  }
`;

const App: FC = () => {

  return (
    <Main>
      <Logo>
        <AirplaneCircle />
      </Logo>

      <Content>
        <h1 className='visually-hidden'>Подобрать билеты</h1>
        <FilterStoreProvider>
          <CurrencyStoreProvider>
            <Settings />
            <TicketsList />
          </CurrencyStoreProvider>
        </FilterStoreProvider>
      </Content>
    </Main>
  );
}

export default App;
