import { IPlayer } from "../interfaces/player";

/**
 * Utility function to randomly shuffle players
 * uses "Durstenfeld shuffle algorithm" to randomize array
 *
 * @param {Array<IPlayers>} players users playing this game
 */
export const shufflePlayers = (players: IPlayer[]) => {
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }
};
