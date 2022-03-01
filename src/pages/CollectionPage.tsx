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
  const collection = props.collection;

  const title = useMemo(
    () =>
      collection
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [collection]
  );

  const initialIDs: SpecifiedArtworkID[] = useMemo(() => {
    const storageIDs = sessionStorage.getItem(collection);
    return storageIDs ? JSON.parse(storageIDs) : [];
  }, [collection]);
  const [length, setLength] = useState(
    initialIDs.length ? initialIDs.length : 5
  );
  const usedIDsRef = useRef(initialIDs);
  usedIDsRef.current = useRandomSpecifiedCollectionIDs(
    length - usedIDsRef.current.length,
    props.collection,
    usedIDsRef.current
  );

  const usedIDs = usedIDsRef.current;
  const displayIDs = usedIDs.length > 15 ? usedIDs.slice(-15) : usedIDs;
  sessionStorage.setItem(collection, JSON.stringify(displayIDs));

  if (!displayIDs.length) return <div>Loading...</div>;
  return (
    <div id="collection-page">
      <PageTitle text={title} underlined={true} />
      <ArtworkPreviewsList specifiedIDs={displayIDs} />
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
