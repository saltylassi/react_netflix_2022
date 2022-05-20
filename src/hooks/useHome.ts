import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import apis from '../apis';
import { isModalOpen } from '../atoms/atoms';
import { IResponse } from '../interfaces/interface';

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

const useHome = () => {
  const { isLoading: npMVLoading, data: nowPlayingMovies } = useQuery<IResponse<IMovieResult>>(
    ['movies', 'nowPlaying'],
    () => apis.getMovies('now_playing')
  );
  const { isLoading: pMVLoading, data: popularMovies } = useQuery<IResponse<IMovieResult>>(['movies', 'popular'], () =>
    apis.getMovies('popular')
  );
  const { isLoading: uMVLoading, data: upcomingMovies } = useQuery<IResponse<IMovieResult>>(
    ['movies', 'upcoming'],
    () => apis.getMovies('upcoming')
  );

  const modalOpen = useRecoilValue(isModalOpen);

  return {
    npMVLoading,
    pMVLoading,
    uMVLoading,
    nowPlayingMovies,
    popularMovies,
    upcomingMovies,
    modalOpen,
  };
};

export default useHome;
