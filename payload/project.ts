import { IProject } from '../component/project/IProject';
// import image1 from '../asset/stack1.png';
// import image2 from '../asset/stack2.png';
// import image3 from '../asset/stack3.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    // ***************************************************
    {
      title: 'OLED E4-1 / LG Dipslay / 한국 파주',
      startedAt: '2014-01',
      endedAt: '2016-01',
      where: '소형~대형 In-line Glass OLED 증착 공정 PLC ,HMI 개발 보조 업무 진행.',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: 'GX QP Configurator & QD75MH4를 활용한 Servo Motor 프로그램 트러블 슈팅' },
            {
              content:
                '진공제어 프로그램 트러블 슈팅 (Dry,Cryo Pump,PSG500,BPG400 / ATM-LVAC-HVAC제어)',
            },
            { content: 'MES 사양 분석 및 프로그램 작성 후 시운전 테스트(TPD,APD,Recipe,RMS 등)' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 Punch List 해결 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: 'OLED E4-2 / LG Dipslay / 한국 파주',
      startedAt: '2016-01',
      endedAt: '2016-11',
      where: '소형~대형 In-line Glass OLED 증착 공정 2호기 추가 증설',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: '증착 설비 Power Heating 시퀀스 프로그램 개발 / PID 제어계활용(Yamadake)' },
            {
              content: '물류반송 챔버 단동, 자동 프로그램, 상하류 연동 I/F 프로그램 개발 및 테스트',
            },
            { content: 'Eternet을 활용한 VISION I/F 프로그램 개발 및 테스트 ' },
            { content: 'Serial 통신을 활용한 온도모듈 제어 프로그램 개발 및 테스트' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 Punch List 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: 'OLED 55L / LG Dipslay / 한국 구미',
      startedAt: '2016-11',
      endedAt: '2017-09',
      where: '55인치 대형 In-line Glass OLED 증착 공정 PLC ,HMI 개발',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: '원가절감을 위한 PLC,HMI 개수 축소 및 프로그램 전체 변경 작업' },
            { content: '증착 설비 Power Heating 시퀀스 프로그램 개발 / PID 제어계활용(Yamadake)' },
            { content: 'MES 사양 분석 및 프로그램 작성 후 시운전 테스트(TPD,APD,Recipe,RMS 등)' },
            { content: 'Serial 통신을 활용한 Barcode 프로그램 개발 및 테스트' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 Punch List 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: '86BH Cluster OLED / BOE / 중국 허페이',
      startedAt: '2017-09',
      endedAt: '2018-08',
      where: '86인치 대형 Cluster Glass OLED 증착 공정 PLC ,HMI 개발',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: '산쿄社 직교 Robot I/F, 시퀀스 프로그램 개발 및 제어 안전 수립' },
            {
              content:
                'QD77MS16를 활용한 Servo Motor 동기제어 및 보간제어를 활용한 프로그램 개발 및 테스트',
            },
            { content: 'Nikkidenso DD Motor를 활용한 증착 시퀀스 개발 및 테스트' },
            { content: '증착 설비 Power Heating 시퀀스 프로그램 개발 / PID 제어계활용(Yamadake)' },
            { content: '가상 시운전 테스트 프로그램 개발하여 업무 환경 개선' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 트러블 슈팅 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: 'ICCU,EV,RG3 / Hyundai Mobis / 한국 대구',
      startedAt: '2020-03',
      endedAt: '2020-11',
      where: 'OBC 전력변환장치 조립라인 PLC & HMI 신규 개발',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: 'QD77MS4를 활용한 써멀그리스, 실란트 연속 궤적 도포 프로그램 개발' },
            { content: 'RFID Tag 시스템을 통한 상위 정보(MES) 관리 프로그램 개발' },
            {
              content:
                '물류 Convayer 반송 프로그램, 너트러너를 활용한 조립공정 시퀀스 제어 프로그램 개발',
            },
            { content: 'Barcode, Printer Serial 통신 프로그램 작성 및 테스트' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 트러블 슈팅 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: '양음극 Package / LG Energy Solution / 미국 미시간주 홀랜드',
      startedAt: '2020-11',
      endedAt: '2021-02',
      where: 'Package 설비 양산 제어 대응 / 생산가동 이슈 및 개선 사항 처리 대응',
      descriptions: [
        {
          content: '제어 양산 대응',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Daily Meeting을 통한 생산가동 라인의 고객사 문의 개선건 관련 프로그램 및 UI 추가 작업',
            },
            { content: '음극,양극 Tape 부착 정밀 Vision 측정 공정 추가 프로그램 작업' },
            { content: '제어관련 트러블 슈팅 대응 및 Operator 지원' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: 'Mylar Tape 부착기 / LG Display / 한국 구미',
      startedAt: '2021-02',
      endedAt: '2021-10',
      where: 'Macbook 14,16인치 판넬 테이프 부착설비 PLC & HMI 설비 신규 개발',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            { content: 'QD77MS16 120축 Servo Motor 제어 프로그램 작성 및 테스트 (원점,단동,자동)' },
            {
              content:
                'LS DD Motor 프로그램 및 튜닝, Barcode 및 Loadcell Serial 통신 프로그램 작성',
            },
            { content: 'Plasma Unit 제어를 위한 Modbus TCP Ethernet 통신 프로 그램 작성' },
            { content: 'MES 제어 ECS 사양 프로그램 작성 및 인수인계' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 트러블 슈팅 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: 'CELL03 / Doosan Fuel Cell / 한국 익산',
      startedAt: '2021-02',
      endedAt: '2021-10',
      where: '두산 퓨어셀 수소 CELL 재도포, 반송, 적재 공정 PLC ,HMI 개발 업무 진행.',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'QJ71MT91 통신을 활용한 두산로보틱스社 다축 로봇 제어 (Vision 측정 미도포 구간 정밀 재도포 공정)',
            },
            {
              content:
                'LS Inverter 70ea Cell 동시 물류 반송 제어 프로그래밍 작성 및 데이터 관리 업무 진행',
            },
            { content: 'CELL 1000ea 적재 유닛 데이터 관리 및 시퀀스 프로그램 작성 및 테스트' },
            { content: 'MES 제어 ECS 사양 프로그램 작성 및 인수인계' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 트러블 슈팅 해결 업무 진행' },
            { content: '고객사 HMI Operation 교육 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    // ***************************************************
    {
      title: '중대형 Z-Stack / Samsung SDI / 미국 인디애나주 코코모',
      startedAt: '2023-08',
      endedAt: '2025-07',
      where: '원통형릴 양음극 극판 노칭&컷팅, Z Stacking, 바인딩 PLC ,HMI 개발 업무 진행.',
      descriptions: [
        {
          content: 'PLC, HMI 설계',
          // postImage: image3,
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '설비 內 기기 셋팅 및 프로그램 작업',
              descriptions: [
                { content: 'EL EPC 셋팅' },
                { content: 'Becker Ring Blow 셋팅' },
                { content: 'Keyence BCR SR-1000 셋팅' },
                { content: 'Keyence GT2-70 두께감지 셋팅' },
                { content: 'CAS CI150 무게감지 셋팅' },
                { content: 'SICK OD2 거리감지 셋팅' },
                { content: 'Weidmüller AD/DA 셋팅' },
              ],
            },

            {
              content: '원통형 Reel 0.5s Tact-time Feeding & Cutting & Press 프로그램 설계',
              descriptions: [
                { content: 'R32MTCPU Motion CPU를 통한 작성 및 테스트' },
                { content: 'Reel 반경센서, 댄서를 활용한 Feeding 시 보정치 계산' },
                { content: 'Feeding, Cutting, Press 속도 연산' },
                { content: 'NG 극판 데이터 트래킹, 상위보고, CASE별 NG 배출 시퀀스 프로그램 작성' },
                { content: '상부,하부 Reel Auto Change 프로그램 시퀀스 개발' },
              ],
            },
            { content: 'Vision, PMAC(Z-Stack Unit) 설비 운용 I/F 프로그램 개선 개발건 추가 작업' },
            { content: '(바인딩 설비)J/R 본딩, 테이핑 설비 시퀀스 프로그램 개발' },
          ],
        },
        {
          content: '설비 SET-UP 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '국내&미주 설비 108대 SET-UP업무 진행 / 설비 1대당 PLC 3ea, Touch 5ea' },
            { content: '전기 입출력 I/O, AD, DA 체크 업무 진행' },
            { content: '단동 운전, 공운전, 연동 운전 검증 업무 진행' },
            { content: '고객사의 요청에따른 PLC, HMI 변경작업 및 트러블 슈팅 해결 업무 진행' },
          ],
        },
      ],
      // image: image3,
    },

    /*
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
    */
  ],
};

export default project;
