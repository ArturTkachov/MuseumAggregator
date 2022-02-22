import { FC } from 'react';
import '../css/preview/ArtworkPreviewInfo.css';

interface Props {
  artworkName: string;
  artworkType?: string;
  artistName: string;
  artworkDate: string;
  artworkOrigin: string;
}

const ArtworkPreviewInfo: FC<Props> = (props) => {
  return (
    <section className="preview-info">
      <h2>{props.artworkName}</h2>
      {props.artworkType && <span>{props.artworkType}</span>}
      <span>
        Artist: {props.artistName ? props.artistName : 'Unknown artist'}
      </span>
      {props.artworkOrigin && (
        <span>Place of origin: {props.artworkOrigin}</span>
      )}
      <span>{props.artworkDate}</span>
    </section>
  );
};

export default ArtworkPreviewInfo;
