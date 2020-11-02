import chalk from "chalk";
import Table from "cli-table";
import { IPlayer } from "../interfaces/player";
import { sortPlayersByRank } from "../utils/sort";

/**
 * Helper function to print the leaderboard according to the rank of players
 *
 * @param {Array<IPlayers>} players users playing the game
 */
export const printLeaderboard = (players: IPlayer[]) => {
  console.log(chalk.cyanBright("\n     ** Leaderboard **"));

  const table = new Table({
    head: ["Rank", "Player", "Score"]
  });

  const rankOrderedPlayers = sortPlayersByRank(players);

  for (const player of rankOrderedPlayers) {
    table.push([isNaN(player.rank) ? "-" : player.rank, player.displayName, player.totalScore]);
  }

  console.log(table.toString());
};
