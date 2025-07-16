export const getRandomJokes = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke", {
        method: 'GET'
    });
    return await response.json();
};

