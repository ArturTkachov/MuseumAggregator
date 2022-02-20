import { DataSource } from '../../types/SpecifiedArtworkID';
import { FC } from 'react';
import MetArtworkPreview from '../../components/preview/MetArtworkPreview';

interface Props {
  source: DataSource;
  id: number;
}

const ArtworkPreviewProxy: FC<Props> = (props) => {
  const previews = {
    met: MetArtworkPreview,
  };
  const CurrentPreview = previews[props.source];

  return <CurrentPreview id={props.id} />;
};

export default ArtworkPreviewProxy;
