import styled from '@emotion/styled';

interface HeaderProps {
  title?   : string;
  leftIcon?: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  leftFn?   : () => void;
  rightIcon?: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  rightFn?: () => void;
}

const Header = ({
  title,
  leftIcon: LeftIcon,
  leftFn,
  rightIcon: RightIcon,
  rightFn,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <Left>
        {LeftIcon && <LeftIcon onClick={leftFn} />}
        <span>{title}</span>
      </Left>
      {RightIcon && <RightIcon onClick={rightFn} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 1.2rem 2rem;
`;

const Left = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.fonts.head04};
`;
