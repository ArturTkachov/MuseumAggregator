import { FC } from 'react';
import '../css/preview/ArtworkPreviewInfo.css';

interface Props {
  artworkName: string;
  artistName: string;
  artworkDate: string;
}

const ArtworkPreviewInfo: FC<Props> = (props) => {
  return (
    <section className="preview-info">
      <h2>{props.artistName}</h2>
      <span>Artist: {props.artistName}</span>
      <span>{props.artworkDate}</span>
    </section>
  );
};

export default ArtworkPreviewInfo;
