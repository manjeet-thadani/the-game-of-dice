import { program } from "commander";
import { start } from "./commands/start";
import { CLI_NAME, VERSION, HELP_MESSAGE, RULES_MESSAGE } from "./constants";

program
  .version(VERSION)
  .name(CLI_NAME)
  .command("start")
  .description("to start an new Game of Dice")
  .action(start);

program
  .command("rules")
  .description("the rules of the game")
  .action(() => {
    console.log(RULES_MESSAGE);
  });

program.on("--help", () => {
  console.log(HELP_MESSAGE);
});

program.parse(process.argv);
