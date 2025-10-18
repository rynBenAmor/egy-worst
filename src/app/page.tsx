
import { MoviePreview } from "./types/movie";
import MovieCard from "./components/MovieCard";
import { buildMovieUrl } from "./utils/tmdb";

export default async function HomePage() {
  // Fetch popular movies from TMDb
  const res = await fetch(buildMovieUrl("/movie/popular"), {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const movies: MoviePreview[] = data.results || [];

  console.log(
    `First Movie: ${data.results[0]?.title || "N/A"}
    Page: ${data.page}
    Total Pages: ${data.total_pages}
    Total Results: ${data.total_results}`
  );

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">🔥 Popular Movies</h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
