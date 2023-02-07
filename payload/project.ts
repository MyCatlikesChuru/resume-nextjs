import { IProject } from '../component/project/IProject';
import image1 from '../asset/stack1.png';
import image2 from '../asset/stack2.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'indiego : 우리동네 공연 티켓팅 서비스',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '코드스테이츠 메인 프로젝트 (6인/4주)',
      descriptions: [
        {
          content: '[백엔드]: Spring, SpringBoot, Mysql, Redis, AWS(S3,RDS,EC2)',
          postImage: image1,
          weight: 'MEDIUM',
          descriptions: [
            { content: '회원도메인,공연도메인 댓글 API 기능구현' },
            { content: '메인화면 날짜별,지역별 조회 API 구현 (Query Method 사용)' },
            { content: '카오맵 현재화면에 표현되는 좌표값 조회 API 구현(Querydsl 사용)' },
            { content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정' },
            { content: 'OAuth2.0 소셜로그인(구글,네이버,카카오) 구현' },
            { content: 'Redis 캐쉬서버를 이용한 JWT Refresh Token 관리 프로그램 구현' },
            { content: 'AWS S3 버킷을 이용한 이미지 업로드 프로그램 구현 및 추상화' },
            { content: '[배포링크]:', postHref: 'http://indiego.site' },
            { content: '[깃헙레포]:', postHref: 'https://github.com/MyCatlikesChuru/indiego' },
          ],
        },
      ],
      image: image1,
    },
    {
      title: 'Stackoverflow : 클론코딩',
      startedAt: '2022-12',
      endedAt: '2023-01',
      where: '코드스테이츠 메인 프로젝트 (6인/2주)',
      descriptions: [
        {
          content: '[팀장, 백엔드]: Spring, SpringBoot, Mysql, Nginx, AWS(EC2)',
          postImage: image2,
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 개발 상황 관리' },
            { content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정' },
            { content: 'OAuth2.0 소셜로그인(구글) 구현' },
            { content: '질문 등록,조회,삭제,투표 API 기능구현' },
            { content: '답글 등록,조회,삭제,투표 API 기능구현' },
            { content: '수동 배포환경 구축(EC2,Mysql,Nginx)' },
            { content: '[배포링크]:', postHref: 'http://stackoverflowpre.p-e.kr' },
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
