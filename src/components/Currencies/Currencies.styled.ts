import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0 0 20px;
  padding: 0 15px;
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  &:first-child button {
    border-radius: 5px 0 0 5px;
    margin-right: -1px;
  }
  &:last-child button {
    border-radius: 0 5px 5px 0;
    margin-left: -1px;
  }
`;

export const Currency = styled.button<{isActive: boolean}>`
  position: relative;
  padding: 12px 25px;
  margin: 0;
  color: ${({theme}) => theme.colors.main};
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.defaultLight};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  
  &:hover {
    border-color: ${({theme}) => theme.colors.main};
    background-color: ${({theme}) => theme.colors.mainLight};
    z-index: 1;
  }
  
  ${(props) => props.isActive && css`
    color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.main};
    background-color: ${({theme}) => theme.colors.main};
    
    &:hover {
      border-color: ${({theme}) => theme.colors.main};
      background-color: ${({theme}) => theme.colors.main};
    }
  `}
`;
