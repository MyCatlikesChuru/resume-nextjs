import favicon from '../asset/favicon.png';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '이재혁 이력서';
const description = '이력서 입니다.';

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
          width: 800,
          height: 600,
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
