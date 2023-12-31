import { useState } from 'react';
import getCroppedImage from '../services/image-url';
import cn from '../lib/utils';

const GameCardImage = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={getCroppedImage(url)}
      className={cn(
        'transition-all duration-300 object-cover w-full h-[259.333px]',
        loading ? 'blur-md' : 'blur-none'
      )}
      loading="lazy"
      onLoad={() => setLoading(false)}
      alt="Game"
    />
  );
};

export default GameCardImage;
