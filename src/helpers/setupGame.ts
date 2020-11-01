import { IConfig, IPlayer } from "../interfaces";
import { shufflePlayers } from "../utils/shuffle";

/**
 * Utility function to prepare players information
 *
 * @param {Config} config configuration provided by the user
 * @returns {Array<IPlayers>} players information
 */
const preparePlayers = (config: IConfig): IPlayer[] => {
  const players: IPlayer[] = [];
  for (let i = 1; i <= config.numberOfPlayers; i++) {
    const player: IPlayer = {
      displayName: `Player-${i}`,
      totalScore: 0,
      lastScore: 0,
      skipTurn: false,
      hasWon: false,
      rank: NaN
    };

    players.push(player);
  }

  return players;
};

/**
 * Helper function to prepare players and shuffle players
 *
 * @param {Config} config configuration provided by the user
 * @returns {Array<IPlayers>} shuffled players information
 */
export const setupGame = async (config: IConfig): Promise<IPlayer[]> => {
  const players: IPlayer[] = preparePlayers(config);

  shufflePlayers(players);
  return players;
};
