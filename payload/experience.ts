import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주) Philenergy',
      position: 'PLC Software Engineer / 제어개발팀',
      startedAt: '2023-09',
      // endedAt: '2018-08',
      descriptions: [
        '자동화 공정 프로그램(PLC) 및 HMI 설계, 테스트 업무',
        '2차전지 양음극 Unwinder Cutting, Feeding, Z-Stack 설비 제어 담당',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
    {
      title: '(주) System R&D',
      position: 'PLC Software Engineer / 제어팀',
      startedAt: '2020-03',
      endedAt: '2022-06',
      descriptions: [
        '자동화 공정 프로그램(PLC) 및 HMI 설계, 테스트 업무',
        'Macbook 표면 Mylar Tape 부착기 설비 제어 담당',
        '수소 Fuel Cell 이송 및 적재 / 미도포 영역 도포 설비 제어 담당',
        'OBC,RG3,ICCU 조립라인 제어 담당',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
    {
      title: '(주) YAS',
      position: 'PLC Software Engineer / 제어팀',
      startedAt: '2013-12',
      endedAt: '2018-08',
      descriptions: [
        '자동화 공정 프로그램(PLC) 및 HMI 설계, 테스트 업무',
        'OLED 증착 설비 제어 담당',
        'OLED Glass 반송 물류 설비 제어 담당',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
