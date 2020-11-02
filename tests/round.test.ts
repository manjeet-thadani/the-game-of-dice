import inquirer from "inquirer";
import { generatePlayers } from "./helpers/players.helper";
import { playRound } from "../src/helpers/playRound";
import { getRandomNumber } from "../src/utils/random";

jest.mock("inquirer");

describe("Test 'playRound'", () => {
  beforeEach(() => {
    inquirer.prompt = jest.fn().mockResolvedValue({ choice: "r" });
  });

  test("Player's score should be increased by 1", async () => {
    getRandomNumber = jest.fn().mockReturnValue(1);

    const players = generatePlayers(1);

    await playRound(players[0], 5);
    expect(players[0].totalScore).toEqual(1);
  });

  test("Player's should win the game", async () => {
    getRandomNumber = jest.fn().mockReturnValue(6);

    const players = generatePlayers(1);

    await playRound(players[0], 5);
    expect(players[0].totalScore).toEqual(6);
    expect(players[0].hasWon).toEqual(true);
  });

  test("Player's next chance should be skipped", async () => {
    getRandomNumber = jest.fn().mockReturnValue(1);

    const players = generatePlayers(1);
    players[0].totalScore = 1;
    players[0].lastScore = 1;

    await playRound(players[0], 5);
    expect(players[0].totalScore).toEqual(2);
    expect(players[0].hasWon).toEqual(false);
    expect(players[0].skipTurn).toEqual(true);
  });

  test("Player's current chance should be skipped", async () => {
    getRandomNumber = jest.fn().mockReturnValue(1);

    const players = generatePlayers(1);
    players[0].totalScore = 1;
    players[0].lastScore = 1;
    players[0].skipTurn = true;

    await playRound(players[0], 5);
    expect(players[0].totalScore).toEqual(1);
    expect(players[0].hasWon).toEqual(false);
    expect(players[0].skipTurn).toEqual(false);
  });
});
