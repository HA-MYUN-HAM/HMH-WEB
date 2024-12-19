import styled from '@emotion/styled';

interface ButtonProps {
  text     : string;
  clickedFn: () => void;
  disabled?: boolean;
  isFixed? : boolean;
}

const Button = ({ text, clickedFn, disabled, isFixed }: ButtonProps) => {
  return (
    <ButtonLayout $isFixed={!isFixed}>
      <RealButton
        type="submit"
        onClick={clickedFn}
        disabled={disabled}
        $colored={!disabled}>
        {text}
      </RealButton>
    </ButtonLayout>
  );
};

export default Button;

const ButtonLayout = styled.div<{ $isFixed: boolean; }>`
  position: ${({ $isFixed }) =>($isFixed ? 'relative' : 'fixed')};
  bottom: 0;

  width: 100%;
  padding: 3.2rem 1.8rem;
`;

const RealButton = styled.button<{ $colored: boolean; }>`
  width: 100%;
  padding: 2rem 0;
  border-radius: 1.2rem;

  background-color: ${({ theme, $colored }) =>($colored ? theme.color.primary : theme.color.grey01)};

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.head05};
  ${({ theme }) => theme.effect.boxDrop};
`;
