/**
 * Utility function to generate random number in the provided range
 *
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @return {number} random generated number in the provided ranges
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
