import React from 'react';
import styled from 'styled-components';

interface IProps {
  element: React.ReactNode;
  path?: string;
}
const Nav: React.FC<IProps> = ({ element }) => {
  return (
    <Container>
      <Column>{element}</Column>
    </Container>
  );
};

export default Nav;

const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;

const Column = styled.div``;
