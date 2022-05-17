import { useQuery } from 'react-query';
import { useMatch } from 'react-router-dom';
import apis from '../apis';

export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<IMovieResult>;
  total_pages: number;
  total_results: number;
}

const useHome = () => {
  const {
    isLoading,
    data: nowPlayingMovies,
    error,
  } = useQuery<IResponse>(['movies', 'nowPlaying'], apis.getNowPlayingMovies);

  const movieMatch = useMatch('/movies/:id');

  return { isLoading, nowPlayingMovies, error, movieMatch };
};

export default useHome;
