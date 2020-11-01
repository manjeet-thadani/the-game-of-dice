import chalk from "chalk";
import inquirer from "inquirer";
import { getRandomNumber } from "../utils/random";
import { IPlayer } from "../interfaces/player";

/** Utility function to wait till user provide input to roll the dice */
const inputRollDice = async (player: IPlayer) => {
  const questions = [
    {
      type: "list",
      name: "choice",
      message: `${player.displayName} its your turn (select 'r' to roll the dice)`,
      choices: ["r"]
    }
  ];

  await inquirer.prompt(questions);
};

/**
 * Helper function to simulate a dice roll
 *
 * @param {IPlayer} player user for which simulation needs to be performed
 * @param {number} winPoints total points required to complete the game
 * @returns {void}
 */
export const playRound = async (player: IPlayer, winPoints: number): Promise<void> => {
  if (player.skipTurn) {
    player.skipTurn = false;
    player.lastScore = 0;
    return;
  }

  await inputRollDice(player);

  const score = getRandomNumber(1, 6);

  console.log(chalk.bold(`[${player.displayName}] You have received ${score} points`));

  player.totalScore += score;
  if (player.totalScore >= winPoints) {
    player.hasWon = true;

    console.log(chalk.green.bold(`Congratulations ${player.displayName}, You have completed this game`));
    return;
  }

  if (score === 6) {
    console.log(chalk.bold(`Well done ${player.displayName}! You get a chance to ROLL DICE AGAIN`));

    return playRound(player, winPoints);
  }

  if (score === 1 && player.lastScore === 1) {
    player.skipTurn = true;
    console.log(chalk.bold(`Oh-Oh!, ${player.displayName} your turn would be skipped in next round`));
  }
};
