import { FC, useState, useRef, useEffect } from 'react';
import ImageViewerList from './ImageViewerList';
import '../css/artwork-page/ImageViewer.css';

interface Props {
  images: string[];
}

const ImageViewer: FC<Props> = (props) => {
  const [activeIndex, setIndex] = useState(0);
  const images = props.images;

  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.style.transitionDuration = '0s';
      img.style.opacity = '0.4';
      setTimeout(() => {
        img.style.transitionDuration = '0.8s';
        img.style.opacity = '1';
      }, 25);
    }
  });

  return (
    <div id="image-viewer">
      <img ref={imgRef} src={images[activeIndex]} alt="big artwork" />
      <ImageViewerList images={images} setIndex={setIndex} />
    </div>
  );
};

export default ImageViewer;
