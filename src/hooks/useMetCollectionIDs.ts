import { useGetMetDepartmentArtworksIDsQuery } from '../apis/metApi';
import { CollectionType } from '../types/CollectionType';

const useMetCollectionIDs = (collection: CollectionType): number[] | null => {
  const metDepartmentIDs = {
    [CollectionType.Antiquity]: 13,
    [CollectionType.Asia]: 6,
    [CollectionType.MiddleAges]: 17,
  };
  const depID = metDepartmentIDs[collection];
  const { data: ids, isLoading } = useGetMetDepartmentArtworksIDsQuery(depID);

  if (isLoading || !ids) return null;
  return ids;
};

export default useMetCollectionIDs;
