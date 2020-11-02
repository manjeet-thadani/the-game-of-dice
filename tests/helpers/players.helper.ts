import { IPlayer } from "../../src/interfaces";

export const generatePlayers = (count: number) => {
  const players: IPlayer[] = [];

  for (let i = 1; i <= count; i++) {
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
