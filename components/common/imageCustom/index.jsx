import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './style.module.scss';

function ImageCustom(props) {
  const [errorImage, setErrorImage] = useState(
    '/images/default-thumbnail.webp'
  );

  useEffect(() => {
    setErrorImage('/images/default-thumbnail.webp');
  }, [errorImage, props.srcSet]);

  const IMAGE_QUALITY = 80;

  return (
    <Image
      src={props?.srcSet}
      layout={props.layout}
      alt={props.alt}
      title={props.title}
      className={`${style.imageStyle} ${props.customClass}`}
      onClick={props.onClick}
      placeholder="blur"
      priority
      quality={IMAGE_QUALITY}
      onError={() => setErrorImage('/images/default-thumbnail.webp')}
    />
  );
}
export default ImageCustom;
