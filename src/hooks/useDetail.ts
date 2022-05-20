import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import apis from '../apis';
import { IMovieDetailResponse, ITVDetailResponse } from '../interfaces/interface';

const useDetail = () => {
  const location = useLocation();

  const id = new URLSearchParams(location.search).get('id') || '';
  const type = new URLSearchParams(location.search).get('type') || 'movie';

  const { isLoading, data } = useQuery<IMovieDetailResponse | ITVDetailResponse>(['detail', id], () =>
    apis.getDetail(type, id)
  );

  return { isLoading, data };
};

export default useDetail;
