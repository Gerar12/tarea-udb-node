import axios from 'axios';

/**
 * Fetches all characters from the Rick and Morty API.
 * Prints the name of each character to the console.
 */
export const AllCharacters = async () => {
    try {
        // URL de la API con la primera página de personajes
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await axios.get(url);
        // Limitamos la salida a los primeros 10 personajes
        const characters = response.data.results.slice(0, 10);
        characters.forEach((character: { name: string }) => {
            console.log(character.name);
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
};

/**
 * Retrieves character information from the Rick and Morty API based on the provided character name.
 * @param characterName - The name of the character to search for.
 */
export const CharacterByName = async (characterName: string) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
        if (response.data.results.length > 0) {
            response.data.results.forEach((character: { id: number; name: string; status: string; species: string; gender: string }) => {
                console.log(`ID: ${character.id}, Name: ${character.name}, Status: ${character.status}, Species: ${character.species}, Gender: ${character.gender}`);
            });
        } else {
            console.log('Character not found.');
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
            console.log('Character not found.');
        } else {
            console.error('Error searching for character:', error);
        }
    }
};