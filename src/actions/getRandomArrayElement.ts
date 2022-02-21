import getRandomNumberInRange from './getRandomNumberInRange';

const getRandomArrayElement = <T>(arr: T[]): T =>
  arr[getRandomNumberInRange(0, arr.length)];

export default getRandomArrayElement;
