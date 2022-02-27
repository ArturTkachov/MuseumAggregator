import getRandomArrayElement from './getRandomArrayElement';
import specifyID from './specifyID';
import { DataSource, SpecifiedArtworkID } from '../types/SpecifiedArtworkID';

const getRandomSpecifiedIDs = (
  amount: number,
  source: DataSource,
  arr: number[],
  usedElements: SpecifiedArtworkID[]
): SpecifiedArtworkID[] => {
  const elements: SpecifiedArtworkID[] = [];
  let iterations = 0;
  const maxIterations = amount + 5;
  while (elements.length < amount) {
    if (iterations === maxIterations) break;
    iterations++;
    const id = getRandomArrayElement(arr);
    const specID = specifyID(source, id);
    if (!containsSpecifiedID(specID, usedElements)) elements.push(specID);
  }
  return elements;
};

export const containsSpecifiedID = (
  specID: SpecifiedArtworkID,
  arr: SpecifiedArtworkID[]
): boolean => {
  for (let i = 0; i < arr.length; i++)
    if (specID.source === arr[i].source && specID.id === arr[i].id) return true;
  return false;
};

export default getRandomSpecifiedIDs;
