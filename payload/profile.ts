import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// { faBlog , faEnvelope, faPhone }
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/leejaehyeok.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이재혁',
    small: '',
  },
  contact: [
    {
      title: 'dhfif718@naver.com',
      link: '',
      icon: faEnvelope,
    },
    {
      title: '+82 010-8033-5244',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/MyCatlikesChuru',
      link: 'https://github.com/MyCatlikesChuru',
      icon: faGithub,
    },
    {
      link: 'https://blog.naver.com/dhfif718',
      icon: faBlog,
    },
    {
      link: 'https://mycatlikeschuru.github.io',
      icon: faBlog,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '👣 한걸음씩 나아가고있는 백엔드 주니어 개발자입니다.',
    // icon: faBell,
  },
};

export default profile;
