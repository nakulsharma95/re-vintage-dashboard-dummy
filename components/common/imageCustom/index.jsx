import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './style.module.scss';

function ImageCustom(props) {
  const [errorImage, setErrorImage] = useState(
    'https://i.ytimg.com/vi/jMkHvP4YLag/maxresdefault.jpg'
  );

  useEffect(() => {
    setErrorImage('https://i.ytimg.com/vi/jMkHvP4YLag/maxresdefault.jpg');
  }, [errorImage, props.srcSet]);

  return (
    <Image
      src={props?.srcSet}
      layout={props.layout}
      alt={props.alt}
      title={props.title}
      className={`${style.imageStyle} ${props.customClass}`}
      onClick={props.onClick}
      placeholder="blur"
      blurDataURL="/blur_image.webp"
      priority
      onError={() =>
        setErrorImage('https://i.ytimg.com/vi/jMkHvP4YLag/maxresdefault.jpg')
      }
    />
  );
}
export default ImageCustom;
