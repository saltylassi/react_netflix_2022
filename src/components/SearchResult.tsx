import styled from 'styled-components';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {
  title: string;
  keyword: string;
}

const SearchResult: React.FC<IProps> = ({ title, keyword }) => {
  return (
    <BodyLayout>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <PosterContainer></PosterContainer>
    </BodyLayout>
  );
};

export default SearchResult;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem 0.5rem;
  margin: 0 auto;
`;

const Poster = styled.div``;
