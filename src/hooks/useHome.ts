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
  const { isLoading: npMVLoading, data: nowPlayingMovies } = useQuery<IResponse>(['movies', 'nowPlaying'], () =>
    apis.getMovies('now_playing')
  );
  const { isLoading: pMVLoading, data: popularMovies } = useQuery<IResponse>(['movies', 'popular'], () =>
    apis.getMovies('popular')
  );
  const { isLoading: uMVLoading, data: upcomingMovies } = useQuery<IResponse>(['movies', 'upcoming'], () =>
    apis.getMovies('upcoming')
  );

  const movieMatch = useMatch('/movie/:id');

  return { npMVLoading, pMVLoading, uMVLoading, nowPlayingMovies, popularMovies, upcomingMovies, movieMatch };
};

export default useHome;
