export const TMDB_API_KEY = '29023a1794f2cc286b6bb1050e234412';

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p'; // add w500 for example then poster_path

export function buildMovieUrl(endpoint: string, queryParams: Record<string, string | number> = {}) {
    // usage: buildMovieUrl('/search/movie', { query: 'Inception', page: 1 });
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', TMDB_API_KEY);
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
