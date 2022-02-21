import { CollectionType } from '../types/CollectionType';
import { FC, useRef, useState } from 'react';
import ArtworkPreviewsList from '../components/preview/ArtworkPreviewsList';
import { SpecifiedArtworkID } from '../types/SpecifiedArtworkID';
import useRandomSpecifiedCollectionIDs from '../hooks/useRandomSpecifiedCollectionIDs';

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

  if (!idsRef.current.length) return <div>Loading...</div>;
  return (
    <>
      <ArtworkPreviewsList specifiedIDs={idsRef.current} />
      <button onClick={() => setLength(length + 5)}>load more</button>
    </>
  );
};

export default CollectionPage;
