/**
 * Interface to store configs required to start the game.
 *
 * @interface
 */
export interface IConfig {
  /** numberOfPlayers: total number of players playing the game */
  numberOfPlayers: number;

  /** winPoints: points/score required to win the game  */
  winPoints: number;
}
