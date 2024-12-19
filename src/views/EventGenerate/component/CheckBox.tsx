import styled from '@emotion/styled';
import { useState } from 'react';
import { DefaultCheckIcon, SelectedCheckIcon 
} from '../../../assets/icon';

interface CheckBoxProps {
  content: string
}

const CheckBox = ({ content }:CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBoxLayout $isSelected={isChecked} onClick={() => { setIsChecked(!isChecked); }}>
      {isChecked ? <SelectedCheckIcon /> : <DefaultCheckIcon />}{content}
    </CheckBoxLayout>
  );
};

export default CheckBox;

const CheckBoxLayout = styled.button<{ $isSelected: boolean; }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme, $isSelected }) => ($isSelected ? theme.color.grey900 : theme.color.grey500)};
  ${({ theme }) => theme.fonts.body02};
`;
