/**
 * Interface to store player information throughout the game.
 *
 * @interface
 */
export interface IPlayer {
  /** displayName: name of the player; Example: Player-1 */
  displayName: string;

  /** totalScore: total score accumulated by the player */
  totalScore: number;

  /** lastScore: last score recorded by the player */
  lastScore: number;

  /** skipTurn: skip next turn */
  skipTurn: boolean;

  /** hasWon: represents if the player has completed the game; can also be calculated using `totalScore` */
  hasWon: boolean;

  /** rank: rank of the player */
  rank: number;
}
