import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'Gradle',
      // level: 3,
    },
    {
      title: 'Spring Boot',
      // level: 3,
    },
    {
      title: 'Spring MVC',
      // level: 3,
    },
    {
      title: 'Spring Security',
      // level: 2,
    },
    {
      title: 'Spring Data JPA',
      // level: 2,
    },
    {
      title: 'AWS EC2',
      // level: 2,
    },
    {
      title: 'Oracle Cloud Instance',
      // level: 1,
    },
    // {
    //   title: 'Querydsl',
    //   // level: 1,
    // },
    // {
    //   title: 'Nginx',
    //   // level: 1,
    // },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      // level: 3,
    },
    {
      title: 'Redis',
      // level: 2,
    },
    // {
    //   title: 'Oracle',
    //   level: 1,
    // },
    // {
    //   title: 'MongoDB',
    //   level: 1,
    // },
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
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
  ],
};

const Studying: ISkill.Skill = {
  category: 'Studying',
  items: [
    {
      title: 'Querydsl',
    },
    // {
    //   title: 'Nginx',
    // },
    {
      title: 'Docker',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc, Studying],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
