import { Link } from 'react-router-dom';
import styled from 'styled-components';
import usePosterLink from '../hooks/usePosterLink';

interface IProps {
  children: React.ReactNode;
  targetLink: string;
}

const PosterLink: React.FC<IProps> = ({ children, targetLink }) => {
  const { handleClick } = usePosterLink();
  return (
    <Wrapper to={`/${targetLink}`} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

export default PosterLink;

const Wrapper = styled(Link)``;
