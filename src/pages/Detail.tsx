import styled from 'styled-components';
import { padding } from '../constants/constants';
import useDetail from '../hooks/useDetail';
import BodyLayout from '../layouts/BodyLayout';
import { utils } from '../utils';

interface IProps {}

const DescriptionContainer = styled.div``;

const DescriptionColumn = styled.div``;

const Description = styled.span``;

const Detail: React.FC<IProps> = () => {
  const { isLoading, data } = useDetail();

  return isLoading ? (
    <BodyLayout>Loading</BodyLayout>
  ) : (
    <BodyLayout>
      <Container bgImage={utils.makeImagePath(data?.backdrop_path || '')}>
        <TitleContainer>
          <Title>{data && 'original_name' in data ? data.original_name : data?.title}</Title>
          <DescriptionContainer>
            <DescriptionColumn>
              genre :{' '}
              {data?.genres.length
                ? data?.genres.map((genre, index) => (
                    <Description>
                      {genre.name}
                      {index + 1 === data.genres.length ? '' : ', '}
                    </Description>
                  ))
                : 'none'}
            </DescriptionColumn>
            <DescriptionColumn>
              <Description>vote : {data?.vote_average} </Description>
              <Description>{`(${data?.vote_count} times)`}</Description>
            </DescriptionColumn>
          </DescriptionContainer>
        </TitleContainer>
        <OverviewContainer>
          <Overview>{data?.overview}</Overview>
        </OverviewContainer>
      </Container>
    </BodyLayout>
  );
};

export default Detail;

const Container = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${(props) => props.bgImage});
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 ${padding.hPadding};
`;

const TitleContainer = styled.div`
  padding: ${padding.vPadding} 0;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

const OverviewContainer = styled.div`
  padding: ${padding.vPadding} 0;
  width: 50vw;
`;

const Overview = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
