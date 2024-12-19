import styled from '@emotion/styled';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { ManagerIcon, RightArrowIcon } from '../../../assets/icon';
import { ProfileImg } from '../../../assets/img';

const MyPage = () => {
  const [currentTap, setCurrentTap] = useState('default');
  const navigate = useNavigate();

  const moveToTicket = ()=>{
    setCurrentTap('ticket');
    navigate('ticket');
  };

  return <>  
    {currentTap === 'default'?   
      <MyPageLayout>
        <Profile>
          <ProfileImage
            src={ProfileImg}
            alt="프로필이미지"
          />
          <ProfileName><ManagerIcon />김민영</ProfileName>
        </Profile>
        <TapList>
          <TapItem onClick={moveToTicket}>티켓 조회<RightArrowIcon /></TapItem>
          <LogOut>로그아웃</LogOut>
        </TapList>
      </MyPageLayout> 
      : <Outlet context={{ setCurrentTap }} />
    }
  </>;
};
  
export default MyPage;
  
const MyPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4.8rem;
  
  width: 100dvw;
  height: 100dvh;
  padding: 6.4rem 0;
`;

const Profile = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:2.4rem;
`;

const ProfileImage = styled.img`
  width:8.8rem;
  height: auto;
`;

const ProfileName = styled.div`
  display: flex;
  gap: 1.2rem;

  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.head02};
`;

const TapList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width :100%;
`;

const TapItem = styled.li`
  display: flex;
  justify-content: space-between;

  width: calc(100% - 5rem);
  margin: 0 2.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey300};

  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.body02};
`;

const LogOut = styled.li`
  padding: 2.5rem;
 
  color: ${({ theme }) => theme.color.grey900};
  ${({ theme }) => theme.fonts.small01};
`;
