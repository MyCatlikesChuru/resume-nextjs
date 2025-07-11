import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        '안녕하세요. 천천히 발전해 나아가고 있는 자동화 제어 설계 엔지니어 이재혁 입니다. 주로 Mitsubishi PLC 프로그램을 활용한 제어 설계와 GOT, Proface HMI 작화를 통해 고객사에서 요구하는 자동화 설비 사양서에 맞춰 프로그램을 작성하는 업무를 하고 있습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '[프로그램 개발 > 현장 SET-UP > 트러블 슈팅 > 양산 검수, 품질 대응 > 양산 > C/S 유지보수] 업무 단계를 걸쳐 제품 개발에 대한 제어 프로그램 대응을 진행해 왔습니다. 크고 작은 프로젝트를 통해 다양한 전자기기와의 통신 제어가 능통합니다. Ethernet 통신, Serial 통신, CC-Link 통신, 광통신, AD/DA 제어, Servo Motor 제어, Inverter 제어, DD Motor 제어, Robot 제어 등 프로그램 작성이 가능합니다. 오랜 기간 동안 프로그램 작업을 하면서 시퀀스 프로그램 작성하는데 매우 능통하며 더 나은 클린 코드를 작성하기 위해 끈임없이 동료들과 소통하며 새로운 기술 습득을 위해 다양한 도전을 두려워하지 않습니다.',
    },
    /*
    {
      content: '• ',
      // postHref: 'https://ghchart.rshah.org/219138/MyCatlikesChuru',
      // postImage: 'https://ghchart.rshah.org/219138/MyCatlikesChuru',
    },
    */
    {
      content: '',
    },
  ],
  sign: 'Lee JaeHyeok',
  // sign: packageJson.author.name,
  // latestUpdated: '2023-02-07',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
