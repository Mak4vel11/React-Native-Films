export const MOVIE_CONFIG = {
    BASE_URL: 'https://thronesapi.com/api/v2/Characters'
};

export const fetchCharachters = async ({ query }: { query?: string }) => {
    const response = await fetch(MOVIE_CONFIG.BASE_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch characters: ${response.status}`);
    }

    const data = await response.json();

    if (query && query.trim() !== "") {
        const lowerQuery = query.toLowerCase();
        return data.filter((char: any) =>
            char.fullName?.toLowerCase().includes(lowerQuery) ||
            char.title?.toLowerCase().includes(lowerQuery)
        );
    }

    return data;
};

export const fetchMovieDetails = async (movieId: string): Promise<any> => {
    try {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${movieId}`);
        console.log("movieId:", movieId);

        if (!response.ok) {
            throw new Error(`Failed to fetch movie details: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
