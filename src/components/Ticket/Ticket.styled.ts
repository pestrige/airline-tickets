import styled from "styled-components";

import { Airplane } from "../../svg";
import { Paper } from "../../ui";

export const Wrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Inner = styled(Paper)`
  display: flex;

  @media (max-width: 639px) {
    flex-wrap: wrap;
  }
`;

export const BuySection = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 640px) {
    width: 180px;
    padding-right: 20px;
    border-right: 1px solid ${({theme}) => theme.colors.defaultUltraLight};
  }
`;

export const LogoWrapper = styled.div`
  height: 100px;
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const BuyText = styled.span`
  display: block;
`;

export const InfoSection = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 480px) {
    width: auto;
    margin: 0 auto;
    flex-direction: row;
  }

  @media (min-width: 640px) {
    width: auto;
    padding-left: 20px;
  }
`;

export const Stops = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 5px;
  padding-right: 20px;
  margin: 20px 10px 20px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.defaultLight};

  @media (min-width: 480px) {
    margin-right: 10px;
    width: 120px;
  }
`;

export const StopsText = styled.span`
  display: block;
  font-size: 10px;
  color: ${({theme}) => theme.colors.defaultLight};
  text-align: center;
  text-transform: uppercase;
`;

export const AirplaneSvg = styled(Airplane)`
  position: absolute;
  width: 16px;
  height: 14px;
  right: 0;
  top: 11px;
`;
