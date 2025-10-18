import Image from "next/image";
import { buildMovieUrl, TMDB_IMAGE_URL } from "@/app/utils/tmdb";
import { MovieDetails, MoviePreview } from "@/app/types/movie";
import MovieCard from "@/app/components/MovieCard";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id } = await params;

  const res = await fetch(buildMovieUrl(`/movie/${id}`), {
    next: { revalidate: 3600 },
  });
  const movie: MovieDetails = await res.json();

  // similar movies fetch
  const resSimilar = await fetch(buildMovieUrl(`/movie/${id}/similar`), {
    next: { revalidate: 3600 },
  });
  const similarData = await resSimilar.json();
  const similarMovies = similarData.results || [];

  console.log(`
    -----------------
    Current movie: ${JSON.stringify(movie, null, 2)}
    Similar movies: ${
      similarMovies.map((m: MoviePreview) => m.title).join(", ") || "N/A"
    }
    -----------------`);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 items-start w-full">
        {movie.poster_path && (
          <Image
            src={`${TMDB_IMAGE_URL}/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-2xl shadow-lg w-full md:w-1/3 flex-shrink-0"
          />
        )}

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>

          <p className="text-gray-400 mb-2">
            ⭐ {movie.vote_average.toFixed(1)} &nbsp;•&nbsp;{" "}
            {movie.release_date.slice(0, 4)}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((g) => (
              <span
                key={g.id}
                className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300"
              >
                {g.name}
              </span>
            ))}
          </div>

          <p className="text-gray-200 leading-relaxed mb-4">{movie.overview}</p>

          {/* Debug output */}
          <pre className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto max-h-96 max-w-full mb-4">
            {JSON.stringify(movie, null, 2)}
          </pre>
        </div>
      </div>

      {/* Similar movies */}
      <div className="mt-6 w-full" style={{ maxWidth: "100%" }}>      
        <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
        <div className="flex flex-wrap gap-4 justify-evenly">
          {similarMovies.map((m: MoviePreview) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </>
  );
}
