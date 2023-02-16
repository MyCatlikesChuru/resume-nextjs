import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    'JAVA & Spring Framework를 다루고 있습니다. 웹 3계층 구조의 Spring Framework를 사용한 애플리케이션 개발, Spring Data JPA Query Methods, Querydsl을 이용해 MySQL 데이터베이스에 접근하여 서비스로직에서 처리하는 로직 구현, RDB 특성을 고려해 빈번히 업데이트되어지는 정보의 Query를 줄이기 위해 Redis 캐쉬서버를 도입해 적용해본 경험도 있습니다. Spring Security & JWT를 이용한 인증,권한 부여와 OAuth2.0 소셜로그인을 구현해보았고, 여러가지 소셜로그인을 사용할 수 있도록 확장에 용이하도록 프로그램을 작성한 경험이 있습니다.',
    '',
    '7년간 기계,전자관련 분야의 프로그래밍 언어를 다룬 경험이 있으며, 10회 넘는 프로젝트 경험을 토대로 맡은일에 대한 책임감과 문제해결 능력이 우수한편이고, 의사소통 및 대인관계에 능한편입니다. 세상을 다양하게 보기위해 세계일주를 다녀왔고 새로운것에 대한 모험과 도전하는 것에 항상 흥미와 관심이 많습니다.    ',
    '',
    '• 매일매일 꾸준한 습관의 중요성을 알기 때문에, 작은 성과라도 1일1커밋을 실천 하고있습니다.',
    '• 결심한 목표에 대해서는 뒤를 돌아보지않고 나아가며, 개발자라는 목표 또한 언젠간 최고가 되기위해 나아가고있습니다.',
    '• 정리하는 것을 좋아하며, 6개월간 100개가 넘는 기술 블로그 작성과 여행정보 블로그를 운영중입니다.',
  ],
  sign: 'Lee JaeHyeok',
  // sign: packageJson.author.name,
  // latestUpdated: '2023-02-07',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
