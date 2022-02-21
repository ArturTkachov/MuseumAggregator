import { FC } from 'react';
import MetArtworkPreview from '../../components/preview/MetArtworkPreview';
import { useNavigate } from 'react-router-dom';
import { DataSource } from '../../types/SpecifiedArtworkID';

interface Props {
  source: DataSource;
  id: number;
}

const ArtworkPreviewProxy: FC<Props> = (props) => {
  const previews = {
    met: MetArtworkPreview,
  };
  const CurrentPreview = previews[props.source];

  const navigate = useNavigate();
  const handleClick = () => navigate(`../${props.source}/${props.id}`);

  return <CurrentPreview id={props.id} handleClick={handleClick} />;
};

export default ArtworkPreviewProxy;
