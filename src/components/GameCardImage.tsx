import { useState } from 'react';
import getCroppedImage from '../services/image-url';
import cn from '../lib/utils';

const GameCardImage = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={getCroppedImage(url)}
      className={cn(
        'filter transition-all object-cover',
        loading ? 'grayscale' : 'grayscale-0'
      )}
      loading="lazy"
      onLoad={() => {
        setLoading(false);
        console.log('Loaded');
      }}
      alt="Game"
    />
  );
};

export default GameCardImage;
