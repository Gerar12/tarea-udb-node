import select from "@inquirer/select";
import input from "@inquirer/input";
import colors from "colors";

colors.enable();

const inquirerMenu = async () => {
  console.log("================================".blue);
  console.log(`    La API de ${"Rick y Mort".red}`);
  console.log("================================\n".blue);

  const opt = await select({
    message: `${"¿Que deseas hacer?".italic}`,
    choices: [
      {
        name: "Ver todos los personajes",
        value: "1",
      },
      {
        name: "Buscar a un perosnaje",
        value: "2",
      },
      {
        name: "salir",
        value: "0",
      },
    ],
  });
  return opt;
};

const pause = async () => {
  console.log("  ");

  await input({ message: `Preciona ${"enter".green} para continuar` });
  console.clear();
};

const readInput = async () => {
  const answer = await input({ message: "Nombre del personaje: " });
  return answer;
};

export { inquirerMenu, pause, readInput };
