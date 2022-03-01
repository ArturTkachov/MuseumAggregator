import { FC, useMemo, useState } from 'react';
import PageDescription from '../components/PageDescription';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import { PageType } from '../types/PageType';
import { useAppSelector } from '../store';
import LoadMoreButton from '../components/LoadMoreButton';
import './css/Favourites.css';

const Favourites: FC = () => {
  const [length, setLength] = useState(5);
  const favourites = useAppSelector((state) => state.favourites);
  const displaySpecIDs = useMemo(
    () => favourites.slice(0, length),
    [favourites, length]
  );

  return (
    <div id="favourites">
      <PageDescription pageType={PageType.Favourites} />
      <ArtworkPreviewsList specifiedIDs={displaySpecIDs} />
      <LoadMoreButton handleClick={() => setLength(length + 5)} />
    </div>
  );
};

export default Favourites;
