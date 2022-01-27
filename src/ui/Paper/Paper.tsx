import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{padding?: string}>`
  padding: ${(props) => props.padding ?? '15px'};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);
`;

interface PaperProps {
  className?: string;
  padding?: string;
}

export const Paper: FC<PaperProps> = ({
  children,
  className = '',
  padding,
}) => {
  return (
    <Wrapper className={className} padding={padding}>
      {children}
    </Wrapper>
  );
};
