import styled from "styled-components";

export const Wrapper = styled.li`
  position: relative;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.mainLight};
    
    & > button {
      display: block;
    }
  }
`;

export const Button = styled.button`
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 7px;
  right: 15px;
  color: ${({theme}) => theme.colors.main};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color 0.3s;
  
  &:hover {
    color: ${({theme}) => theme.colors.mainDark};
  }
`;
