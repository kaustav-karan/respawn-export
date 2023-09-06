import valoBanner from '@/assets/img/website/respawn/valorant-banner.jpeg';
import codmBanner from '@/assets/img/website/respawn/codm-banner.jpeg';
import bgmiBanner from '@/assets/img/website/respawn/bgmi-banner.jpeg';
import minecraftBanner from '@/assets/img/website/respawn/minecraft-banner.jpeg';
import ValorantForm from './Valorant/ValorantForm';
import BGMIForm from './BGMI/BGMIForm';
import CODMForm from './CODM/CODMForm';
import MinecraftForm from './Minecraft/MinecraftForm';

export const games = {
  valorant: {
    title: 'Valorant',
    postApi: '/register/valorant',
    backgroundImage: valoBanner,
    href: '/respawn/valorant',
    formComponent: ValorantForm,
    players: 6,
  },
  bgmi: {
    title: 'Battlegrounds Mobile India',
    postApi: '/register/bgmi',
    backgroundImage: bgmiBanner,
    href: '/respawn/bgmi',
    formComponent: ValorantForm,
    players: 5,
  },
  codm: {
    title: 'Call of Duty: Mobile',
    postApi: '/register/codm',
    backgroundImage: codmBanner,
    href: '/respawn/codm',
    formComponent: ValorantForm,
    players: 6,
  },
  minecraft: {
    title: 'Minecraft',
    postApi: '/register/minecraft',
    backgroundImage: minecraftBanner,
    href: '/respawn/minecraft',
    formComponent: ValorantForm,
    players: 5,
  },
};

export const temp = '';

/* documentation 
    games = {
        'string after /respawn/ in the url' : {
            title: Title that will be displayed on the /respawn route
            backgroundImage: Bakcgorund image for that game that will be displayed on the /respawn route
            url: url of where the user will be redirected on clicking 
                on the box that contains the info of the game on /respawn

            formComponent: The form component that will be displayed on the url mentioned above
        }
    }
*/
