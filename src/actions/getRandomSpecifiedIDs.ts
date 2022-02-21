import getRandomArrayElement from './getRandomArrayElement';
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
    const specID = {
      source,
      id: getRandomArrayElement(arr),
    };
    if (!containsSpecifiedID(specID, usedElements)) elements.push(specID);
  }
  return elements;
};

const containsSpecifiedID = (
  specID: SpecifiedArtworkID,
  arr: SpecifiedArtworkID[]
): boolean => {
  for (let i = 0; i < arr.length; i++)
    if (specID.source === arr[i].source && specID.id === arr[i].id) return true;
  return false;
};

export default getRandomSpecifiedIDs;
