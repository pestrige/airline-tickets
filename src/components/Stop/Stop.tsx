import React, { FC } from "react";

import { Button, Wrapper } from "./Stop.styled";
import { Checkbox } from "../../ui";
import { useConnection } from "../../hooks/useConnection";

interface ConnectionProps {
  id: number;
  name: string;
}

export const Stop: FC<ConnectionProps> = ({
  id,
  name,
}) => {
  const {checked, handleClick} = useConnection(id);

  return (
    <Wrapper>
      <Checkbox
        id={id}
        checked={checked}
        onChange={handleClick}
      >
        {name}
      </Checkbox>
      <Button type="button" onClick={() => handleClick(id, true)}>
        только
      </Button>
    </Wrapper>
  );
};
