import { FC } from 'react';
import { useGetMetArtworkByIDQuery } from '../../apis/metApi';
import ArtworkPreviewInfo from '../../components/preview/ArtworkPreviewInfo';
import LoadingArtworkPreview from './LoadingArtworkPreview';
import '../css/preview/ArtworkPreview.css';

interface Props {
  id: number;
  handleClick: () => void;
}

const MetArtworkPreview: FC<Props> = (props) => {
  const { data, isLoading } = useGetMetArtworkByIDQuery(props.id);

  if (isLoading || !data) return <LoadingArtworkPreview />;
  return (
    <li className="artwork-preview" onClick={props.handleClick}>
      <img src={data.primaryImageSmall} alt="artwork" />
      <ArtworkPreviewInfo
        artworkName={data.title}
        artworkType={data.objectName}
        artistName={data.artistDisplayName}
        artworkDate={data.objectDate}
        artworkOrigin={data.country}
      />
    </li>
  );
};

export default MetArtworkPreview;
