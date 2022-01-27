import styled from "styled-components";

export const Time = styled.span`
  display: block;
  font-size: 28px;
`;

export const Point = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
`;

export const Date = styled.span`
  margin: 0;
  font-size: 12px;
  color: ${({theme}) => theme.colors.defaultLight};
`;
