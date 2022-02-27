import { FC, useMemo, useState } from 'react';
import PageDescription from '../components/PageDescription';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import WideIconButton from '../components/WideIconButton';
import arrowSrc from '../assets/icons/white/chevronDownWhite.svg';
import { PageType } from '../types/PageType';
import { ColorName } from '../types/ColorName';
import { useAppSelector } from '../store';
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
      <WideIconButton
        src={arrowSrc}
        backgroundColor={ColorName.Yellow}
        hoverBackgroundColor={ColorName.Red}
        handleClick={() => setLength(length + 5)}
      />
    </div>
  );
};

export default Favourites;
