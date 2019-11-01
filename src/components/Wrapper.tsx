import styled from '@emotion/styled';

export const Wrapper = styled.div<{ color?: string }>(p => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: p.color || '#263238',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: 'white',
}));
