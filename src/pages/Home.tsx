import React from 'react';
import styled from 'styled-components';

interface IProps {}
const Home: React.FC<IProps> = () => {
  return <Container>Home</Container>;
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
`;
