import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import apis from '../apis';
import { isModalOpen } from '../atoms/atoms';
import { IResponse } from '../interfaces/interface';

export interface ITVResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const useTV = () => {
  const { isLoading: atTVLoading, data: airingTodayShows } = useQuery<IResponse<ITVResult>>(
    ['shows', 'airing_today'],
    () => apis.getShows('airing_today')
  );
  const { isLoading: otaTVLoading, data: onTheAirShows } = useQuery<IResponse<ITVResult>>(['shows', 'on_the_air'], () =>
    apis.getShows('on_the_air')
  );
  const { isLoading: pTVLoading, data: popularShows } = useQuery<IResponse<ITVResult>>(['shows', 'popular'], () =>
    apis.getShows('popular')
  );
  const modalOpen = useRecoilValue(isModalOpen);

  return { atTVLoading, airingTodayShows, otaTVLoading, onTheAirShows, pTVLoading, popularShows, modalOpen };
};

export default useTV;
