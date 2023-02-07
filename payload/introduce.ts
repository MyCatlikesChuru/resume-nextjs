import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '',
    '',
  ],
  sign: 'Lee JaeHyeok',
  // sign: packageJson.author.name,
  latestUpdated: '2023-02-07',
  // latestUpdated: lastestUpdatedAt,
};

export default introduce;
