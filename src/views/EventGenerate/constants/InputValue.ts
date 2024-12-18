export const InputValue = [
  { title: '행사 제목*', type: 'text', placeholder: '제목 입력', required: true },
  {
    title      : '행사 일시*',
    type       : 'tel',
    placeholder: '0000년 00월 00일 00시 00분',
    required   : true,
  },
  { title: '행사 장소*', type: 'text', placeholder: '장소 입력', required: true },
  { title: '행사 한 줄 소개*', type: 'text', placeholder: 'ex. 새학기의 시작을 함께 준비해요!', required: true },
  { title: '행사 정보', type: 'textarea', placeholder: 'ex. 행사 구성 요소, 준비물, 주의사항 등' },
  {
    title: '계좌 / 참가비*', placeholder: '은행 / 가격', required: true,
  },
  { title: '문의번호*', type: 'tel', placeholder: '010-0000-0000', required: true },
];
