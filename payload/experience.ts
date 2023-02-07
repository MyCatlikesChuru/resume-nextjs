import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    // {
    //   title: '(주)System R&D',
    //   position: 'PLC Software Engineer',
    //   startedAt: '2018-02',
    //   descriptions: [
    //     'OTA Service Provider',
    //     'Data modeling and Mashup API development',
    //     'Systems Engineering and DevOps',
    //   ],
    //   skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'Mashup API', 'AWS'],
    // },
    {
      title: '(주) System R&D',
      position: 'PLC Software Engineer',
      startedAt: '2020-03',
      endedAt: '2022-06',
      descriptions: [
        '자동화 공정 프로그램(PLC) 설계 및 작성,테스트 업무',
        '한국 구미 LG Display 부착기 공정장비 PLC 프로그램 작성 및 테스트',
        '미국 Holland LG 에너지솔루션 배터리 공정장비 PLC 프로그램 유지보수',
        '한국 익산 두산퓨어셀 수소차 공정장비 PLC 프로그램 작성 및 테스트',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
    {
      title: '(주) YAS',
      position: 'PLC Software Engineer',
      startedAt: '2013-12',
      endedAt: '2018-08',
      descriptions: [
        '자동화 공정 프로그램(PLC) 설계 및 작성,테스트 업무',
        '한국 파주 LG Display OLED Inline 장비 PLC 프로그램 유지보수 (4년)',
        '한국 구미 LG Display OLED 증착장비 PLC 프로그램 작성 및 테스트',
        '중국 허페이 BOE OLED 클라스터 장비 PLC 프로그램 작성 및 테스트',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
