import { getRandomNumber } from "../src/utils/random";
import { shufflePlayers } from "../src/utils/shuffle";
import { sortPlayersByRank } from "../src/utils/sort";
import { generatePlayers } from "./helpers/players.helper";

describe("Check functionality of 'Random Function' utility", () => {
  test("Should generate number between range 1-6", async () => {
    const randomNumber = getRandomNumber(1, 6);

    expect(randomNumber).toBeLessThanOrEqual(6);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
  });
});

describe("Check functionality of 'Shuffle Players' utility", () => {
  test("Should shuffle players", async () => {
    const players = generatePlayers(2);

    shufflePlayers(players);
    expect(players.length).toEqual(2);

    // [TODO] add support to test randomness in the shuffling
  });
});

describe("Check functionality of 'Sort Players by Rank' utility", () => {
  test("Should sort players by their rank", async () => {
    const players = generatePlayers(2);

    let rank = 2;
    for (const player of players) {
      player.rank = rank;
      rank -= 1;
    }

    const sortedPlayers = sortPlayersByRank(players);

    expect(sortedPlayers.length).toEqual(2);
    expect(sortedPlayers[0].displayName).toEqual(players[1].displayName);
    expect(sortedPlayers[1].displayName).toEqual(players[0].displayName);
  });
});
