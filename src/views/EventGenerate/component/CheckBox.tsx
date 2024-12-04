import styled from '@emotion/styled';
import { useState } from 'react';
import { DefaultCheckIcon, SelectedCheckIcon 
} from '../../../assets/icon';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBoxLayout $isSelected={isChecked} onClick={() => { setIsChecked(!isChecked); }}>
      {isChecked ? <SelectedCheckIcon /> : <DefaultCheckIcon />} 메인 페이지에 공지사항으로 업로드합니다.
    </CheckBoxLayout>
  );
};

export default CheckBox;

const CheckBoxLayout = styled.button<{ $isSelected: boolean; }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  margin-bottom: 15.2rem;

  color: ${({ theme, $isSelected }) => ($isSelected ? theme.color.grey900 : theme.color.grey500)};
  ${({ theme }) => theme.fonts.body02};
`;
