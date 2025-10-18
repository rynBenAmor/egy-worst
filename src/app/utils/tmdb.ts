export const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p'; // add w500 for example then poster_path

export function buildMovieUrl(endpoint: string, queryParams: Record<string, string | number> = {}) {
    // usage: buildMovieUrl('/search/movie', { query: 'Inception', page: 1 });
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);

  // read into a local variable and ensure it's set at runtime so TypeScript sees a string
  const apiKey = TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in the environment');
  }

  url.searchParams.append('api_key', apiKey);
  Object.entries(queryParams).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });
  return url.toString();
}

/*
  TMDB API Endpoints:

  - Movie details:
    /movie/{movie_id}

  - Search movies:
    /search/movie?query=...

  - Popular movies:
    /movie/popular

  - Genres:
    /{genre}/movie/list

  - Cast & crew:
    /movie/{id}/credits
*/
