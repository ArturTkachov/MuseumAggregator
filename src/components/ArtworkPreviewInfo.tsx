import { FC } from 'react';
import './css/ArtworkPreviewInfo.css';

interface Props {
  artworkName: string,
  artistName: string,
  artworkBegin: number,
  artworkEnd: number
}

const ArtworkPreviewInfo: FC<Props> = (props) => {
  return (
    <section className="preview-info">
      <h2>{props.artistName}</h2>
      <span>Artist: {props.artistName}</span>
      <span>{props.artworkBegin} - {props.artworkEnd}</span>
    </section>
  )
};

export default ArtworkPreviewInfo;
