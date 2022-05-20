import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useSearchResult, { ISearchMovieResult, ISearchTVResult } from '../hooks/useSearchResult';
import { utils } from '../utils';
import PosterLink from './PosterLink';

interface IProps {
  title: string;
  keyword: string;
}

const SearchResult: React.FC<IProps> = ({ title, keyword }) => {
  const { isLoading, data: response } = useSearchResult(title, keyword);
  return isLoading ? (
    <Container>searching</Container>
  ) : (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <PosterContainer>
        {response?.results.map((result) => {
          const isMovie = title === 'Movies';
          if (isMovie) {
            const typed = result as ISearchMovieResult;
            return (
              <PosterLink targetLink={`detail?type=movie&id=${result.id}`}>
                <Poster key={result.id} bgPath={utils.makeImagePath(result.backdrop_path)}></Poster>
                {typed.title}
              </PosterLink>
            );
          } else {
            const typed = result as ISearchTVResult;
            return (
              <PosterLink targetLink={`detail?type=tv&id=${result.id}`}>
                <Poster key={result.id} bgPath={utils.makeImagePath(result.backdrop_path)}></Poster>
                {typed.name}
              </PosterLink>
            );
          }
        })}
      </PosterContainer>
    </Container>
  );
};

export default SearchResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem 0.5rem;
`;

const Poster = styled.div<{ bgPath: string }>`
  width: 20rem;
  height: 10rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.bgPath});
`;
