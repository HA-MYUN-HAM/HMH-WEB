import styled from '@emotion/styled';

interface ButtonProps {
  text     : string;
  clickedFn: () => void;
  disabled?: boolean;
}

const Button = ({ text, clickedFn, disabled }: ButtonProps) => {
  return (
    <ButtonLayout>
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

const ButtonLayout = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  padding: 3.2rem 1.8rem;
`;

const RealButton = styled.button<{ $colored: boolean; }>`
  width: 100%;
  padding: 2rem 0;
  border-radius: 1.5rem;

  background-color: ${({ theme, $colored }) =>($colored ? theme.color.primary : theme.color.grey01)};

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.head05};
  ${({ theme }) => theme.effect.boxDrop};
`;
