import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const BodyLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BodyLayout;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto 0;
  padding: 2rem 0;
  margin: 2rem 0;
  //임시, 이중스크롤
  overflow: hidden;
`;
