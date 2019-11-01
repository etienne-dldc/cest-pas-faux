import React from 'react';
import styled from '@emotion/styled';

const Box = styled.div({
  width: '100%',
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
});

const VraiFaux = styled.span({
  fontSize: '6rem',
  fontWeight: 900,
});

const Emoji = styled.span({
  fontSize: '10rem',
});

const ColorColor = styled.div<{ color: string }>(p => ({
  width: '40vh',
  height: '40vh',
  borderRadius: '100%',
  background: p.color,
}));

export type ColorType = 'red' | 'green' | 'faux' | 'vrai' | 'smart' | 'dumb';

export const COLORS: Array<ColorType> = ['red', 'green', 'faux', 'vrai', 'smart', 'dumb'];

interface Props {
  color: ColorType | null;
}

export const Color: React.FC<Props> = ({ color }) => {
  return (
    <Box>
      {(() => {
        switch (color) {
          case null:
            return null;
          case 'red':
            return <ColorColor color="red" />;
          case 'green':
            return <ColorColor color="green" />;
          case 'faux':
            return <VraiFaux>Faux !</VraiFaux>;
          case 'vrai':
            return <VraiFaux>Vrai !</VraiFaux>;
          case 'dumb':
            return (
              <Emoji>
                <span role="img" aria-label="smart">
                  🤪
                </span>
              </Emoji>
            );
          case 'smart':
            return (
              <Emoji>
                <span role="img" aria-label="smart">
                  🤓
                </span>
              </Emoji>
            );
          default:
            return null;
        }
      })()}
    </Box>
  );
};
