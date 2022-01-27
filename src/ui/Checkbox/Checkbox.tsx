import React, { FC } from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover  {
    background-color: ${({theme}) => theme.colors.mainLight};
    
    & span {
      border-color: ${({theme}) => theme.colors.main};
    }
  }
`;

const CustomCheckbox = styled.span<{checked: boolean}>`
  position: relative;
  display: inline-block;
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border: 1px solid ${({theme}) => theme.colors.defaultLight};
  border-radius: 3px;
  transition: border-color 0.3s;
  
  &::before, &::after {
    content: "";
    height: 2px;
    position: absolute;
    border-radius: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }
  &::before {
    width: 3px;
    top: 6px;
    left: 3px;
    transform: rotate(45deg);
  }  
  &::after {
    width: 7px;
    top: 6px;
    left: 4px;
    transform: rotate(-45deg);
  }

  ${(props) => props.checked && css`
    border-color: ${({theme}) => theme.colors.main};

    &::before, &::after {
      background-color: ${({theme}) => theme.colors.main};
    }
  `}
`;

interface CheckboxProps {
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  children,
  checked,
  onChange,
}) => {

  return (
    <>
      <Label onClick={() => onChange(id)}>
        <CustomCheckbox checked={checked}/>
        {children}
      </Label>
    </>
  );
};
