import favicon from '../asset/favicon.png';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '이재혁 이력서';
const description = '자동화 엔지니어 (PLC Enginner)d';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 600,
          height: 800,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'JaeHyeok',
        lastName: 'Lee',
        username: 'JaeHyeok',
        gender: 'male',
      },
    },
  },
};
