import { setupGame } from "../src/helpers";
import { IConfig } from "../src/interfaces";

describe("Test 'setupGame'", () => {
  test("Should generate proper IConfig instance", async () => {
    const config: IConfig = { numberOfPlayers: 5, winPoints: 10 };

    let playersNames = [];
    for (let i = 1; i <= config.numberOfPlayers; i++) {
      playersNames.push(`Player-${i}`);
    }

    const players = await setupGame(config);

    expect(players.length).toEqual(config.numberOfPlayers);

    for (const player of players) {
      expect(playersNames).toContain(player.displayName);
      expect(player.totalScore).toBe(0);
      expect(player.lastScore).toBe(0);
      expect(player.skipTurn).toBe(false);
      expect(player.hasWon).toBe(false);
      expect(player.rank).toBe(NaN);

      // remove that player from playerNames
      playersNames = playersNames.filter(name => name !== player.displayName);
    }
  });
});
