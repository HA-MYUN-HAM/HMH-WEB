import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { ApproveIcon } from "../../../assets/icon/index";

const AddEventButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/make-event");
  };

  return (
    <AddEventButtonLayout onClick={onClick}>
      <ButtonContent>
        <ApproveIcon />
        <span>행사 추가하기</span>
      </ButtonContent>
    </AddEventButtonLayout>
  );
};

export default AddEventButton;

const AddEventButtonLayout = styled.button`
  display: flex;
  justify-content: center;
  border: 0.15rem dashed ${({ theme }) => theme.color.grey500};
  border-radius: 0.5rem;
  padding: 2rem auto;
  width: 100%;
`;

const ButtonContent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 1.5rem auto;

  color: ${({ theme }) => theme.color.grey500};
  ${({ theme }) => theme.fonts.body03};
`;
