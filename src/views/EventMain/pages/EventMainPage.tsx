import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import AddEventButton from '../components/AddEventButton';
import EventItem from '../components/EventItem';
import MainHeader from '../components/MainHeader';

const EventMainPage = () => {
  const navigate = useNavigate();

  const handleEventClick = (id: string) => {
    navigate(`/event/${id}`);
  };

  return (
    <EventMainPageLayout>
      <MainHeader />
      <AddEventButton />
      <EventList>
        {mockEvents.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            status={event.status}
            image={event.image}
            onClick={() => handleEventClick(event.id)}
          />
        ))}
      </EventList>
    </EventMainPageLayout>
  );
};

export default EventMainPage;

const EventMainPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100dvw;
  padding: 0 1.6rem;
`;

const EventList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const mockEvents = [
  {
    id      : '1',
    title   : '2024 2학기 개강총회',
    date    : '2024.09.28',
    location: '이화여대 신공학관 161',
    status  : '모집중',
    image   : 'src/assets/img/AI_img_01.png',
  },
  {
    id      : '2',
    title   : 'EE그룹 채용 설명회',
    date    : '2024.09.20',
    location: '이화여대 신공학관 로비',
    status  : '예정',
    image   : 'src/assets/img/AI_img_02.png',
  },
  {
    id      : '3',
    title   : '오늘의 점심 간식 나눔 행사',
    date    : '2024.08.19',
    location: '스타벅스 연대동문점',
    status  : '마감',
    image   : 'src/assets/img/AI_img_03.png',
  },
  {
    id      : '4',
    title   : '오늘의 점심 간식 나눔 행사',
    date    : '2024.08.19',
    location: '스타벅스 연대동문점',
    status  : '마감',
    image   : 'src/assets/img/AI_img_03.png',
  },
];
