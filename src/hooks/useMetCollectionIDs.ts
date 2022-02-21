import { useGetMetDepartmentArtworksIDsQuery } from '../apis/metApi';
import { CollectionType } from '../types/CollectionType';

const useMetCollectionIDs = (department: CollectionType): number[] | null => {
  const metDepartmentIDs = {
    [CollectionType.Antiquity]: 13,
    [CollectionType.Asia]: 6,
    [CollectionType.MiddleAges]: 17,
  };
  const depID = metDepartmentIDs[department];
  const { data: ids, isLoading } = useGetMetDepartmentArtworksIDsQuery(depID);

  if (isLoading || !ids) return null;
  return ids;
};

export default useMetCollectionIDs;
