import { useState, useEffect } from 'react';

const UseImageLoader = (imageUrl) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setImageLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [imageUrl]);

  return imageLoaded;
};

export default UseImageLoader;
