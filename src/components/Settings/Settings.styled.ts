import styled from "styled-components";
import { Paper } from "../../ui";

export const Wrapper = styled(Paper)`
  margin-bottom: 20px;
  align-self: flex-start;
  width: 100%;

  @media (min-width: 1024px) {
    width: auto;
    margin-right: 20px;
  }
`;

export const Title = styled.h2`
  padding: 0 15px;
  margin-top: 0;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;
