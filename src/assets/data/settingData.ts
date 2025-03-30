import { ScreenNames } from '../../constants/screenNames';
import ISettings from '../../types/settings';
import { DevIcon, PrivacyIcon, TermsIcon } from '../icons';
import FavoritesIcon from '../icons/FavoritesIcon';


const settingsData: ISettings[] = [
  {
    id: 1,
    title: 'Favorites',
    icon: FavoritesIcon,
    link: ScreenNames.FAVORITES_SCREEN,
  },
  {
    id: 2,
    title: 'Rate us',
    icon: FavoritesIcon,
  },
  {
    id: 3,
    title: 'Developer Website',
    icon: DevIcon,
  },
  {
    id: 4,
    title: 'Terms of use',
    icon: TermsIcon,
  },
  {
    id: 5,
    title: 'Privacy Policy',
    icon: PrivacyIcon,
  },
];

export default settingsData;
