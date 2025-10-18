export interface MoviePreview {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
}

export interface MovieDetails {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
  genres: { id: number; name: string }[]
}