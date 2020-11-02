import inquirer from "inquirer";
import { inputGameConfigs } from "../src/helpers";

jest.mock("inquirer");

describe("Test 'inputGameConfigs'", () => {
  test("Should generate proper IConfig instance", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ numberOfPlayers: 5, winPoints: 5 });

    const configs = await inputGameConfigs();

    expect(configs.winPoints).toEqual(5);
    expect(configs.numberOfPlayers).toEqual(5);
  });
});
