import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MetArtworkPage from '../components/artwork-page/MetArtworkPage';
import { PageParams } from '../types/PageParams';
import './css/ArtworkPage.css';

const ArtworkPageProxy: FC = () => {
  const { source } = useParams<PageParams>();
  const pages = {
    met: MetArtworkPage,
  };

  if (!source) return <p>no such source type</p>;
  const CurrentPage = pages[source];

  return (
    <div id="artwork-page">
      <CurrentPage />
    </div>
  );
};

export default ArtworkPageProxy;
