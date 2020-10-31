import inquirer from "inquirer";
import { IConfig } from "../interfaces";

/**
 * Helper function to input the configs required to start this game
 * inputs the "Total number of Players" and "Points required to win the game"
 *
 * @return {IConfig} configuration provided by the user
 */
export const inputGameConfigs = async (): Promise<IConfig> => {
  const questions = [
    {
      type: "number",
      name: "numberOfPlayers",
      message: "Select total number of players (minimum = 2)",
      validate: (value: number) => {
        const input = Number(value);
        if (Number.isInteger(input) && input > 1 && input !== Infinity) {
          return true;
        }

        return "Please enter a valid total number of players";
      },
      filter: (value: number) => {
        // clear the invalid value
        const input = Number(value);

        return Number.isInteger(input) && input > 1 && input !== Infinity ? input : "";
      }
    },
    {
      type: "number",
      name: "winPoints",
      message: "Enter the score required to win the game",
      validate: (value: number) => {
        const input = Number(value);
        if (Number.isInteger(input) && input > 0 && input !== Infinity) {
          return true;
        }

        return "Please enter a valid score";
      },
      filter: (value: number) => {
        // clear the invalid value
        const input = Number(value);

        return Number.isInteger(input) && input > 0 && input !== Infinity ? input : "";
      }
    }
  ];

  const answers = await inquirer.prompt(questions);

  const configs: IConfig = {
    numberOfPlayers: answers.numberOfPlayers,
    winPoints: answers.winPoints
  };

  return configs;
};
