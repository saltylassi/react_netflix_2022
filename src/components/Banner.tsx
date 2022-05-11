import styled from 'styled-components';
import { utils } from '../utils';
import { padding } from '../constants/constants';

interface IProps {
  title: string;
  overview: string;
  bgImageID: string;
}

const Banner: React.FC<IProps> = ({ title, overview, bgImageID }) => {
  return (
    <Container bgImage={utils.makeImagePath(bgImageID)}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <OverviewContainer>
        <Overview>{overview}</Overview>
      </OverviewContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${(props) => props.bgImage});
`;

const TitleContainer = styled.div`
  padding: ${padding.vPadding} ${padding.hPadding};
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

const OverviewContainer = styled.div`
  padding: ${padding.vPadding} ${padding.hPadding};
  width: 50vw;
`;

const Overview = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
