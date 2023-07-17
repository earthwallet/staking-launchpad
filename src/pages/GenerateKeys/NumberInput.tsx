import React from 'react';
import styled from 'styled-components';
import { FormDown, FormUp } from 'grommet-icons';
import { Text } from '../../components/Text';

const StyledButton = styled.button`
  height: 25px;
  width: 50px;
  cursor: pointer;
  border: 1px solid #ddd;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${(p: any) => p.theme.gray.lightest};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  button:nth-child(1) {
    border-radius: ${(p: any) => `0 ${p.theme.borderRadius} 0 0`};
  }
  button:nth-child(2) {
    border-radius: ${(p: any) => `0 0 ${p.theme.borderRadius} 0`};
  }
`;
const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  color: #444444;
  padding-inline-start: 10px;
  box-sizing: border-box;
  background-color: ${(p: any) => p.theme.gray.lightest};
  border-radius: ${(p: any) =>
    `${p.theme.borderRadius} 0 0 ${p.theme.borderRadius}`};
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  border: 1px solid #ddd;
  border-inline-end: none;
  display: inline-flex;
  :focus {
    outline: none;
  }
`;

interface Props {
  value: number | string;
  setValue: (e: number) => void;
  allowDecimals?: boolean;
  disabled?: boolean;
}

export const NumberInput = ({
  value,
  setValue,
  allowDecimals,
  disabled,
}: Props): JSX.Element => {
  const handleManualInput = (e: any) => {
    const val = e.target.value;
    if (allowDecimals) {
      setValue(val);
    } else {
      setValue(val.replace(/\./g, '')); // remove "." to force integer input;
    }
  };

  const decrement = () => {
    if (Number(value) > 0) setValue(+value - 1);
  };

  const increment = () => setValue(+value + 1);

  return (
    <div className="flex">
      {disabled ? (
        <Text>{value}</Text>
      ) : (
        <StyledInput
          onChange={disabled ? console.log : handleManualInput}
          value={value}
          type={allowDecimals ? 'number' : 'tel'}
          pattern="^-?[0-9]\d*\.?\d*$"
        />
      )}
      {!disabled && (
        <ButtonContainer>
          <StyledButton onClick={increment} style={{ borderBottom: 'none' }}>
            <FormUp size="medium" />
          </StyledButton>
          <StyledButton className="plus" onClick={decrement}>
            <FormDown size="medium" />
          </StyledButton>
        </ButtonContainer>
      )}
    </div>
  );
};
