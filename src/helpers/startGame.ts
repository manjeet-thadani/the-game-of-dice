import { IPlayer } from "../interfaces/player";
import { playRound } from "./playRound";
import { printLeaderboard } from "./printLeaderboard";

/**
 * Utility function to filter players that has won the game
 *
 * @param {Array<IPlayers>} players total players
 * @returns {Array<IPlayers>} players that has won the game
 */
const filterWinners = (players: IPlayer[]): IPlayer[] => {
  return players.filter(player => player.hasWon);
};

/**
 * Utility function to check if all players has completed the game
 * used to identify when to stop the game
 *
 * @param {Array<IPlayers>} players total players
 * @returns {boolean} has all players completed the game
 */
const hasAllCompleted = (players: IPlayer[]): boolean => {
  return filterWinners(players).length === players.length;
};

/**
 * Helper function to start the game
 * plays rounds till all players has completed the game
 *
 * @param {Array<IPlayers>} players total players
 * @param {number} winPoints points/score required to complete the game
 */
export const startGame = async (players: IPlayer[], winPoints: number) => {
  while (!hasAllCompleted(players)) {
    for (const player of players) {
      if (player.hasWon) {
        continue;
      }

      await playRound(player, winPoints);

      if (player.hasWon) {
        player.rank = filterWinners(players).length;
      }

      printLeaderboard(players);
    }
  }
};
