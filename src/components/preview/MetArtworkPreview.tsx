import { FC } from 'react';
import { useGetMetArtworkByIDQuery } from '../../apis/metApi';
import ArtworkPreviewInfo from '../../components/preview/ArtworkPreviewInfo';
import '../css/preview/ArtworkPreview.css';

interface Props {
  id: number;
}

const MetArtworkPreview: FC<Props> = (props) => {
  const { data, isLoading } = useGetMetArtworkByIDQuery(props.id);

  if (isLoading || !data) return <div>Loadig artwork...</div>;
  return (
    <li className="artwork-preview">
      <img src={data.primaryImageSmall} alt="artwork" />
      <ArtworkPreviewInfo
        artworkName={data.objectName}
        artistName={data.artistDisplayName}
        artworkDate={data.objectDate}
        artworkOrigin={data.country}
      />
    </li>
  );
};

export default MetArtworkPreview;
