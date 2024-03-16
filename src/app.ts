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
        // Función que permite mostrar el nombre de todos los personajes de la API.
        // Ejemplo: await AllCharacters();
        break;

      case "2":
        const character = await readInput();
        // Función que permite mostrar, mediante un nombre, un personaje y su información.
        // Tomando como parámetro el "character", que es el input que introduce el usuario.
        // Ejemplo: await CharacterByName(character);
        break;

      default:
        break;
    }

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

AppRun();
