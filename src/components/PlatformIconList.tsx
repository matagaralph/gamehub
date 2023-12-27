import { Platform } from '../hooks/useGames';
import { Icon } from '@chakra-ui/icon';
('@chakra-ui/icon');
import {
  FaLinux,
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiCommodore, SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  nintendo: SiNintendo,
  ios: MdPhoneIphone,
  androdi: FaAndroid,
  linux: FaLinux,
  xbox: FaXbox,
  playstation: FaPlaystation,
  pc: FaWindows,
  mac: FaApple,
  web: BsGlobe,
  atari: SiAtari,
  sega: SiSega,
  commodore: SiCommodore,
};

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => {
        return <Icon as={iconMap[platform.slug]} key={platform.slug} />;
      })}
    </>
  );
};

export default PlatformIconList;
