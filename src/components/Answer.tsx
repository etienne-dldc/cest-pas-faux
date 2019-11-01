import React from 'react';
import { QuestionData } from '../questions';
import { Wrapper } from './Wrapper';
import styled from '@emotion/styled';

const AnswerTitle = styled.h2({
  fontSize: '3rem',
  textAlign: 'center',
});

const AnswerPara = styled.p({
  fontSize: '2rem',
  textAlign: 'center',
  margin: '1rem 2rem',
});

interface Props {
  question: QuestionData;
  next: () => void;
  isWrong: boolean;
}

export const Answer: React.FC<Props> = ({ question, next, isWrong }) => {
  if ('pasFaux' in question) {
    return (
      <Wrapper>
        <AnswerPara>C'est pas faux !</AnswerPara>
        <button onClick={next}>Question suivante</button>
      </Wrapper>
    );
  }

  if (question.answer === '' || question.answer === undefined) {
    return (
      <Wrapper>
        <button onClick={next}>Question suivante</button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <AnswerTitle>{isWrong ? 'Mauvaise Réponse :' : 'Réponse :'}</AnswerTitle>
      <AnswerPara>{question.answer}</AnswerPara>
      <button onClick={next}>Question suivante</button>
    </Wrapper>
  );
};
