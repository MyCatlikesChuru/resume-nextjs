import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Mitsubishi PLC',
  items: [
    {
      title: 'QCPU',
      level: 3,
    },
    {
      title: 'RCPU',
      level: 3,
    },
    {
      title: 'Ethernet (Q/RJ71E71-100)',
      level: 3,
    },
    {
      title: '서보 제어 (Q/RD77MS4~16)',
      level: 3,
    },
    {
      title: 'CC-LINK 제어',
      level: 3,
    },
    {
      title: 'AD/DA 제어',
      level: 3,
    },
        {
      title: 'Serial 통신 (Q/RJ71C24N)',
      level: 3,
    },
    {
      title: 'CC-LINK IE NETWORK (Q/RJ71GP21-SX)',
      level: 3,
    },
    {
      title: 'Motion CPU (R32MTCPU)',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Tool',
  items: [
    {
      title: 'Gx Developer',
      level: 3,
    },
    {
      title: 'Gx Works2',
      level: 3,
    },
    {
      title: 'Gx Works3',
      level: 3,
    },
    {
      title: 'GT Designer3',
      level: 3,
    },
    {
      title: 'Gx LogViewer',
      level: 3,
    },
    {
      title: 'Logging Tool',
      level: 3,
    },
    {
      title: 'MR Configurator2',
      level: 3,
    },
    {
      title: 'MT Developer2',
      level: 2,
    },
    {
      title: 'Mx Componet V5',
      level: 1.5,
    },
    {
      title: 'Mx Sheet',
      level: 1,
    },
    {
      title: 'NE1A_OMRON',
      level: 1,
    },
  ],
};

// const frontend: ISkill.Skill = {
//   category: 'Front-end',
//   items: [
//     {
//       title: 'Next.js',
//       level: 2,
//     },
//     {
//       title: 'React.js',
//       level: 2,
//     },
//     {
//       title: 'javascript',
//       level: 2,
//     },
//     {
//       title: 'HTML/CSS',
//       level: 2,
//     },
//   ],
// };

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Git',
    },
    {
      title: 'IntelliJ',
    },
    // {
    //   title: 'Vim',
    // },
    // {
    //   title: 'VS Code',
    // },
  ],
};

// const Studying: ISkill.Skill = {
//   category: 'Studying',
//   items: [
//     {
//       title: 'Querydsl',
//     },
//     // {
//     //   title: 'Nginx',
//     // },
//     {
//       title: 'Docker',
//     },
//   ],
// };

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
