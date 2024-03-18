import axios from 'axios';

/**
 * Fetches all characters from the Rick and Morty API.
 * Prints the name of each character to the console.
 */
export const AllCharacters = async () => {
    try {
        let nextPageUrl: string | null = 'https://rickandmortyapi.com/api/character';
        while (nextPageUrl) {
            const response: any = await axios.get(nextPageUrl);
            response.data.results.forEach((character: { name: string }) => {
                console.log(character.name);
            });
            nextPageUrl = response.data.info.next;
        }
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
        console.error('Error searching for character:', error);
    }
};