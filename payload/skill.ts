import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Mitsubishi PLC',
  items: [
    {
      title: 'QCPU 제어',
      level: 3,
    },
    {
      title: 'RCPU 제어',
      level: 3,
    },
    {
      title: 'Ethernet 제어 (Q/RJ71E71-100)',
      level: 3,
    },
    {
      title: 'Servo 제어 (Q/RD77MS4~16)',
      level: 3,
    },
    {
      title: 'CC-Link 제어 (Q/RJ61BT11N)',
      level: 3,
    },
    {
      title: 'AD/DA 제어 (Q/R68ADV,DAV)',
      level: 3,
    },
    {
      title: 'Serial 통신 제어 (Q/RJ71C24N)',
      level: 3,
    },
    {
      title: 'CC-Link IE 네트워크 제어 (Q/RJ71GP21-SX)',
      level: 3,
    },
    {
      title: 'Motion CPU 제어 (R32MTCPU)',
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
      title: 'GP-Pro EX',
      level: 2,
    },
    {
      title: 'Mx Componet V5',
      level: 1,
    },
    {
      title: 'Mx Sheet',
      level: 1,
    },
    {
      title: 'NE1A_OMRON',
      level: 1,
    },
    {
      title: 'M2I',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Notion',
      level: 3,
    },
    {
      title: 'Git',
      level: 2,
    },
    {
      title: 'Excel',
      level: 2,
    },
    {
      title: 'Power Point',
      level: 2,
    },
    {
      title: 'Linux',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  tooltip: '1: LOW\n2: MID\n3: HIGH',
};

export default skill;
