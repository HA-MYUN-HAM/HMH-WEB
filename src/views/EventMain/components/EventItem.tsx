import styled from "@emotion/styled";

interface EventItemProps {
  image: string;
  title: string;
  date: string;
  location: string;
  status: "모집중" | "예정" | "마감";
  onClick: () => void;
}

const EventItem = ({
  image,
  title,
  date,
  location,
  status,
  onClick,
}: EventItemProps) => {
  return (
    <EventItemLayout onClick={onClick}>
      <EventImage src={image} alt={title} />
      <EventInfo>
        <EventTitle>{title}</EventTitle>
        <EventDate>{date}</EventDate>
        <EventLoc>{location}</EventLoc>
        <EventStatus>
          <StatusText>{status}</StatusText>
        </EventStatus>
      </EventInfo>
    </EventItemLayout>
  );
};

export default EventItem;

const EventItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const EventImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
`;
const EventInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const EventTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.head05};
`;
const EventDate = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.body03};
`;
const EventLoc = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.small02};
`;
const EventStatus = styled.span`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  align-item: center;
`;
const StatusText = styled.span<{ status: string }>`
  border-radius: 0.2rem;
  padding: 0.3rem 0.5rem;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.small03};
  background-color: ${({ status, theme }) =>
    status === "모집중"
      ? theme.color.red
      : status === "예정"
      ? theme.color.secondary
      : theme.color.red};
`;
