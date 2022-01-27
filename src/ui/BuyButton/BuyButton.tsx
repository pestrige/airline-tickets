import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 5px 30px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.accent};
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 0 0 ${({theme}) => theme.colors.accentDark};
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.accentLight};
  }
  
  &:active {
    opacity: 0.8;
  }
`;

export const BuyButton: FC = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  )
};
