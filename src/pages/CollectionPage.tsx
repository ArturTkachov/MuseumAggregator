import { CollectionType } from '../types/CollectionType';
import { FC } from 'react';
import { useGetMetDepartmentArtworksIDsQuery } from '../apis/metApi';
import MetArtworkPreview from '../components/MetArtworkPreview';

interface Props {
  collection: CollectionType;
}

const CollectionPage: FC<Props> = (props) => {
  const metDepartmentIDs = {
    [CollectionType.Antiquity]: 13,
    [CollectionType.Asia]: 6,
    [CollectionType.MiddleAges]: 17,
  };
  const depID = metDepartmentIDs[props.collection];
  const { data: ids, isLoading } = useGetMetDepartmentArtworksIDsQuery(depID);

  if (isLoading || !ids) return <div>Loading...</div>;
  return (
    <>
      {ids.slice(0, 5).map((id) => (
        <MetArtworkPreview id={id} />
      ))}
    </>
  );
};

export default CollectionPage;
