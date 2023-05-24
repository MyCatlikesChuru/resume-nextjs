import { IProject } from '../component/project/IProject';
import image1 from '../asset/stack1.png';
// import image2 from '../asset/stack2.png';
// import image3 from '../asset/stack3.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Travel With Me',
      startedAt: '2023-03',
      // endedAt: '2023-02',
      where: '소셜 미디어를 담은 여행 동행모집 서비스 (프론트엔드 2명 / 백엔드 2명)',
      descriptions: [
        {
          content: '백엔드',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: '기획 및 와이어프레임 초안 작성 및 MVP 설정' },
            {
              content:
                'TDD를 이용한 개발 방법론 적용, Test Code 재활용성을 위한 추상화 클래스분리 초안 작성',
              descriptions: [
                {
                  content: '메서드의 재활용성을 높이기위한 Test 코드 리펙토링',
                  href: 'https://mycatlikeschuru.github.io/java/2023/04/12/java-generic.html',
                },
                {
                  content: 'MockMvc ResultActions 응닫객체 한글깨짐 에러핸들링 블로깅',
                  href:
                    'https://mycatlikeschuru.github.io/junit5/2023/04/12/junit5-koreabroken.html',
                },
              ],
            },
            {
              content: 'CI/CD 담당 : AWS EC2, AWS S3, AWS Code Deploy, Git Actions',
              descriptions: [
                {
                  content: 'AWS Code Deploy AccessDeniendException 에러 핸들링 블로깅',
                  href: 'https://mycatlikeschuru.github.io/ci/cd/2023/05/15/cicd-codedeploy.html',
                },
                {
                  content: 'Git Actions Submodule yaml 에러 핸들링 블로깅',
                  href: 'https://mycatlikeschuru.github.io/ci/cd/2023/05/11/cicd-gitactions.html',
                },
              ],
            },
            { content: '여행 동행모집글, 매칭 관리 API 및 서비스 로직 작성' },
            {
              content:
                '[기술스택]: Spring Web, Spring Security, Spring data JPA, Querydsl, Mysql, Redis, Junit 5, AWS(EC2,RDS,S3,Code Deploy), Git Actions',
            },
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
      title: 'indiego',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '우리동네 공연 티켓팅 서비스 (프론트엔드 3명 / 백엔드 3명)',
      descriptions: [
        {
          content: '백엔드',
          postImage: image1,
          weight: 'MEDIUM',
          descriptions: [
            { content: '회원도메인,공연도메인 댓글, 날짜별,지역별 조회 API 구현' },
            { content: '카오맵 현재위치 좌표값 조회 API 구현' },
            {
              content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정작업',
              descriptions: [
                {
                  content: 'Spring Security 기초 지식정리 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/18/til.html',
                },
                {
                  content: 'Spring Security 인증절차 지식정리 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/21/til.html',
                },
                {
                  content: 'Spring Security 권한부여 지식정리 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/22/til.html',
                },
                {
                  content: 'Spring Security + JWT를 사용한 인증 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/24/til.html',
                },
              ],
            },
            {
              content: 'OAuth2.0 소셜로그인(구글,카카오) 구현',
              descriptions: [
                {
                  content: 'OAuth2.0 인증 기초 지식 정리 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/25/til.html',
                },
                {
                  content: 'OAuth2.0 다양한 Vendor 애플리케이션 인증 블로깅',
                  href: 'https://mycatlikeschuru.github.io/til/2022/11/28/til.html',
                },
              ],
            },
            {
              content: 'Redis 캐쉬서버를 이용한 JWT Refresh Token 관리 프로그램 구현',
              descriptions: [
                {
                  content: 'Redis JWT Refresh Token 관리 및 재발행 블로깅',
                  href: 'https://mycatlikeschuru.github.io/db/2023/01/14/db-redis.html',
                },
              ],
            },
            {
              content: 'AWS S3 버킷을 이용한 이미지 업로드 프로그램 구현 및 추상화',
              descriptions: [
                {
                  content: 'AWS S3 FileUpload 관리 블로깅',
                  href:
                    'https://mycatlikeschuru.github.io/spring/2023/01/15/spring-fileupload.html',
                },
              ],
            },
            {
              content:
                '공연태그 기능 API 추가 및 태그를 사용하는 공연조회 API GraphQL 적용하여 호출하도록 변경',
              descriptions: [
                {
                  content: 'GraphQL 적용 공부 및 연습용레포지토리 정리 블로깅',
                  href: 'https://mycatlikeschuru.github.io/spring/2023/04/13/spring-graphql.html',
                },
                {
                  content: '태그 기능 도입시 발생한 JPA N+1 문제 해결 블로깅',
                  href:
                    'https://mycatlikeschuru.github.io/spring/2023/04/11/spring-jpanplusone.html',
                },
              ],
            },
            {
              content:
                '베타베스트 기간을 정해 유저의 서비스경험을 듣고자 주변 지인들에게 사용자 설문경험 조사 및 피드백 반영',
            },
            {
              content:
                '[기술스택]: Spring Web, Spring Security, Spring data JPA, Querydsl, Mysql, Redis, AWS(EC2,RDS,S3,Code Deploy), Git Actions',
            },
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
      // image: image1,
    },
    // {
    //   title: 'Stackoverflow : 소규모 프로젝트',
    //   startedAt: '2022-12',
    //   endedAt: '2023-01',
    //   where: '클론 코딩 프로젝트 (6인/2주)',
    //   descriptions: [
    //     {
    //       content:
    //         '[팀장, 백엔드]: Spring Web, Spring Security, Spring data JPA, Mysql, Nginx, AWS(EC2)',
    //       postImage: image2,
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: '프로젝트 개발상황 및 일정관리' },
    //         { content: 'Spring Security와 JWT를 활용한 인증,인가 및 권한 설정' },
    //         { content: 'OAuth2.0 소셜로그인(구글) 구현' },
    //         { content: '질문,답글 등록,조회,삭제,투표 API 기능구현' },
    //         { content: '수동 배포환경 구축(EC2,Mysql,Nginx)' },
    //         {
    //           content: '[배포링크]:',
    //           postHref: 'http://stackoverflowpre.p-e.kr',
    //         },
    //         {
    //           content: '[깃헙레포]:',
    //           postHref: 'https://github.com/MyCatlikesChuru/StackoverflowClone',
    //         },
    //         {
    //           content: '[회고]:',
    //           postHref: 'https://mycatlikeschuru.github.io/til/2022/12/15/til.html',
    //         },
    //       ],
    //     },
    //   ],
    //   image: image2,
    // },
  ],
};

export default project;
