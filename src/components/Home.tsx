import React from 'react';
import { Wrapper } from './Wrapper';
import styled from '@emotion/styled';

const GameName = styled.h1({
  fontSize: '4rem',
  fontWeight: 900,
  letterSpacing: '-0.12em',
  color: `#E53935`,
  textShadow: '2px 3px rgba(255, 255, 255, 0.8)',
});

interface Props {
  start: () => void;
}

export const Home: React.FC<Props> = ({ start }) => {
  return (
    <Wrapper>
      <GameName>C'est pas faux !</GameName>
      <button onClick={start}>Start</button>
    </Wrapper>
  );
};
