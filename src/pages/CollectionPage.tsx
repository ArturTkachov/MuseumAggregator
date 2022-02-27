import { CollectionType } from '../types/CollectionType';
import { FC, useMemo, useRef, useState } from 'react';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import { SpecifiedArtworkID } from '../types/SpecifiedArtworkID';
import useRandomSpecifiedCollectionIDs from '../hooks/useRandomSpecifiedCollectionIDs';
import WideIconButton from '../components/WideIconButton';
import loadMoreSrc from '../assets/icons/white/chevronDownWhite.svg';
import { ColorName } from '../types/ColorName';
import './css/CollectionPage.css';
import PageTitle from '../components/PageTitle';

interface Props {
  collection: CollectionType;
}

const CollectionPage: FC<Props> = (props) => {
  const [length, setLength] = useState(5);
  const idsRef = useRef<SpecifiedArtworkID[]>([]);
  idsRef.current = useRandomSpecifiedCollectionIDs(
    length - idsRef.current.length,
    props.collection,
    idsRef.current
  );

  const collection = props.collection;
  const title = useMemo(
    () =>
      collection
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [collection]
  );

  if (!idsRef.current.length) return <div>Loading...</div>;
  return (
    <div id="collection-page">
      <PageTitle text={title} underlined={true} />
      <ArtworkPreviewsList specifiedIDs={idsRef.current} />
      <WideIconButton
        src={loadMoreSrc}
        backgroundColor={ColorName.Yellow}
        hoverBackgroundColor={ColorName.Red}
        handleClick={() => setLength(length + 5)}
      />
    </div>
  );
};

export default CollectionPage;
