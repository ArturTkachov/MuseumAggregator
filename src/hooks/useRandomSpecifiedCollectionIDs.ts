import useMetCollectionIDs from './useMetCollectionIDs';
import { CollectionType } from '../types/CollectionType';
import { SpecifiedArtworkID } from '../types/SpecifiedArtworkID';
import getRandomSpecifiedIDs from '../actions/getRandomSpecifiedIDs';

const useRandomSpecifiedCollectionIDs = (
  amount: number,
  collection: CollectionType,
  usedIDs: SpecifiedArtworkID[]
): SpecifiedArtworkID[] => {
  const metIDs = useMetCollectionIDs(collection);
  let specMetIDs: SpecifiedArtworkID[] = [];
  if (metIDs) {
    specMetIDs = getRandomSpecifiedIDs(amount, 'met', metIDs, usedIDs);
    specMetIDs = [...usedIDs, ...specMetIDs];
  }
  return specMetIDs;
};

export default useRandomSpecifiedCollectionIDs;
