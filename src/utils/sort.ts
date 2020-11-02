import { IPlayer } from "../interfaces/player";

/**
 * Utility function to sort players by their rank
 * performs immutable sort i.e. sorting doesn't affect original input
 *
 * @param {Array<Players>} players users playing the game
 * @returns {Array<Players>} players sorted by their rank
 */
export const sortPlayersByRank = (players: IPlayer[]): IPlayer[] => {
  return [...players].sort((player1, player2) => {
    const rank1 = player1.rank;
    const rank2 = player2.rank;

    if (isFinite(rank1 - rank2)) {
      return rank1 - rank2;
    }

    return isFinite(rank1) ? -1 : 1;
  });
};
