'use client'

import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '@/app/utils/string_helpers' // optional helper you wrote
import { TMDB_IMAGE_URL } from '@/app//utils/tmdb' // adjust your import


type MovieCardProps = {
  movie: {
    id: number
    title: string
    poster_path: string | null
    release_date?: string
    vote_average?: number
  }
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movie/${movie.id}/${slugify(movie.title)}`}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-transform block"
    >
      {movie.poster_path ? (
        <Image
          src={`${TMDB_IMAGE_URL}/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full h-auto"
        />
      ) : (
        <div className="h-[375px] bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
          No Image
        </div>
      )}

      <div className="p-3">
        <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
        <p className="text-xs text-gray-400 mt-1">
          ⭐ {movie.vote_average?.toFixed(1) ?? '-'} &nbsp;|&nbsp;{' '}
          {movie.release_date?.slice(0, 4) ?? 'N/A'}
        </p>
      </div>
    </Link>
  )
}
