import chalk from "chalk";
import figlet from "figlet";
import { GAME_NAME } from "../constants";
import { IPlayer, IConfig } from "../interfaces";
import { inputGameConfigs, setupGame, startGame } from "../helpers";

/**
 * Initiates "The Game of Dice"
 */
export const start = async () => {
  console.log(chalk.yellow(figlet.textSync(GAME_NAME, { horizontalLayout: "universal smushing" })));

  // take "number of Players" and "Winning Points" as a input from user
  const config: IConfig = await inputGameConfigs();
  // setup games constructs
  const players: IPlayer[] = await setupGame(config);

  console.log(chalk.cyanBright.bold("\nLet's start the Game!"));

  // starts the game with players
  await startGame(players, config.winPoints);
};
