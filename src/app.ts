import colors from "colors";
import { inquirerMenu, pause, readInput } from "@/logic/helpers/inquirer";

colors.enable();
console.clear();

const AppRun = async () => {
  let opt: string;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //Funcion que permite mostrar nombre de todos los perosnajes dela api
        break;

      case "2":
        const character = await readInput();
        //Funcion que permite mostrar mediante un nombre un perosnaje + su informacion
        break;

      default:
        break;
    }

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

AppRun();
