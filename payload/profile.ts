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
    title: 'μ΄μ¬ν',
    small: '',
  },
  contact: [
    {
      title: 'dhfif718@gmail.com',
      link: '',
      icon: faEnvelope,
    },
    {
      title: '010-8033-5244',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/MyCatlikesChuru',
      link: 'https://github.com/MyCatlikesChuru',
      icon: faGithub,
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
    title: 'π£ νκ±Έμμ© λμκ°κ³ μλ λ°±μλ μ£Όλμ΄ κ°λ°μμλλ€.',
    // icon: faBell,
  },
};

export default profile;
