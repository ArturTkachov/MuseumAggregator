import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { PageParams } from '../../types/PageParams';
import { useGetMetArtworkByIDQuery } from '../../apis/metApi';
import PageTitle from '../../components/PageTitle';
import ImageViewer from './ImageViewer';

import ArtworkPreviewInfo from '../../components/preview/ArtworkPreviewInfo';

const MetArtworkPage: FC = () => {
  const { id } = useParams<PageParams>();
  const { data, isLoading } = useGetMetArtworkByIDQuery(Number(id));

  if (isLoading || !data) return <div>Loading page...</div>;
  return (
    <>
      <PageTitle text={data.title} underlined={true} />
      <ImageViewer images={[data.primaryImage, ...data.additionalImages]} />
      <ArtworkPreviewInfo
        artworkName={data.title}
        artistName={data.artistDisplayName}
        artworkDate={data.objectDate}
        artworkOrigin={data.country}
      />
    </>
  );
};

export default MetArtworkPage;
