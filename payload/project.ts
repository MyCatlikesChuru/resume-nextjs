import { IProject } from '../component/project/IProject';
import image1 from '../asset/stack1.png';
import image2 from '../asset/stack2.png';
// import image3 from '../asset/stack3.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Travel With Me : 여행 동행 서비스',
      startedAt: '2023-03',
      // endedAt: '2023-02',
      where: '프로젝트 (4인) - 개발 진행중',
      descriptions: [
        {
          content: '[백엔드]: Spring Web, Spring Security, Spring data JPA, Mysql, Redis',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: 'TDD를 이용한 개발 방법론 적용' },
            { content: '기획 및 와이어프레임 초안 작성 및 MVP설정' },
            {
              content: '[노션링크]:',
              postHref:
                'https://www.notion.so/Travel-With-Me-bf9d950818d44c98b7be277464a8bdf8?pvs=4',
            },
            {
              content: '[깃헙레포]:',
              postHref: 'https://github.com/Travel-WithMe/TravelWithMe-sever',
            },
          ],
        },
      ],
      // image: image3,
    },
    {
      title: 'indiego : 우리동네 공연 티켓팅 서비스',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '프로젝트 (6인/4주)',
      descriptions: [
        {
          content:
            '[백엔드]: Spring Web, Spring Security, Spring data JPA, Mysql, Redis, AWS(S3,RDS,EC2)',
          postImage: image1,
          weight: 'MEDIUM',
          descriptions: [
            { content: '회원도메인,공연도메인 댓글, 날짜별,지역별 조회 API 구현' },
            { content: 'Querydsl를 이용한 카오맵 현재위치 좌표값 조회 API 구현' },
            { content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정작업' },
            { content: 'OAuth2.0 소셜로그인(구글,네이버,카카오) 구현' },
            { content: 'Redis 캐쉬서버를 이용한 JWT Refresh Token 관리 프로그램 구현' },
            { content: 'AWS S3 버킷을 이용한 이미지 업로드 프로그램 구현 및 추상화' },
            { content: '태그 기능 API 추가 및 조회관련 GraphQL 적용' },
            {
              content: '[배포링크]:',
              postHref: 'http://indiego.site',
            },
            {
              content: '[노션링크]:',
              postHref: 'https://www.notion.so/indiego-db411e7d122a44df9db815e63f121d0f?pvs=4',
            },
            {
              content: '[깃헙레포]:',
              postHref: 'https://github.com/MyCatlikesChuru/indiego',
            },
          ],
        },
      ],
      image: image1,
    },
    {
      title: 'Stackoverflow : 소규모 프로젝트',
      startedAt: '2022-12',
      endedAt: '2023-01',
      where: '클론 코딩 프로젝트 (6인/2주)',
      descriptions: [
        {
          content:
            '[팀장, 백엔드]: Spring Web, Spring Security, Spring data JPA, Mysql, Nginx, AWS(EC2)',
          postImage: image2,
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 개발상황 및 일정관리' },
            { content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정' },
            { content: 'OAuth2.0 소셜로그인(구글) 구현' },
            { content: '질문,답글 등록,조회,삭제,투표 API 기능구현' },
            { content: '수동 배포환경 구축(EC2,Mysql,Nginx)' },
            {
              content: '[배포링크]:',
              postHref: 'http://stackoverflowpre.p-e.kr',
            },
            {
              content: '[깃헙레포]:',
              postHref: 'https://github.com/MyCatlikesChuru/StackoverflowClone',
            },
            {
              content: '[회고]:',
              postHref: 'https://mycatlikeschuru.github.io/til/2022/12/15/til.html',
            },
          ],
        },
      ],
      image: image2,
    },
    // {
    //   title: 'indiego : 우리동네 공연 티켓팅 서비스',
    //   startedAt: '2023-01',
    //   endedAt: '2023-02',
    //   where: '코드스테이츠 메인 프로젝트 (6인/4주)',
    //   descriptions: [
    //     {
    //       content: '제목1',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: '내용1' },
    //       ],
    //     },
    //     {
    //       content: '제목2',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: '내용1' },
    //       ],
    //     },
    //   ],
    //   image,
    // },
  ],
};

export default project;
