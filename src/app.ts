import colors from "colors";
import { inquirerMenu, pause, readInput } from "@/logic/helpers/inquirer";
import { AllCharacters, CharacterByName } from "@/logic/api/axios";

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
        await AllCharacters();
        break;

      case "2":
        const character = await readInput();
        // Función que permite mostrar, mediante un nombre, un personaje y su información.
        // Tomando como parámetro el "character", que es el input que introduce el usuario.
        // Ejemplo: await CharacterByName(character);
        await CharacterByName(character);
        break;

      case "0":
        console.log("Bye bye!");
        break;

      default:
        console.log("Opción no válida");
        break;
    }

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

AppRun();
