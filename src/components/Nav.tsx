import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNav from '../hooks/useNav';

interface IProps {
  element: React.ReactNode;
  path: string;
}
const Nav: React.FC<IProps> = ({ element, path }) => {
  const { match } = useNav(path);

  return (
    <Container>
      <Link to={path}>
        <Column>{element}</Column>
      </Link>
      {match ? <Badge variants={badgeVariants} animate="active" /> : null}
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

const Column = styled.div`
  margin-right: 0.2rem;
`;

const Badge = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(props) => props.theme.red};
  border-radius: 0.25rem;
`;

const badgeVariants = {
  normal: {
    opacity: 1,
  },
  active: {
    opacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};
