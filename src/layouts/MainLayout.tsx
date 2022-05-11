import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.black.darker};
  color: white;
`;
