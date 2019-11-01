import React from 'react';
import { QuestionData } from '../questions';
import { Wrapper } from './Wrapper';
import { Color, ColorType } from './Color';
import styled from '@emotion/styled';

interface Props {
  question: QuestionData;
  showAnswer: () => void;
  color: ColorType | null;
}

const QuestionPara = styled.p({
  fontSize: '2rem',
  textAlign: 'center',
  margin: '1rem 2rem',
});

export const Question: React.FC<Props> = ({ question, showAnswer, color }) => {
  const boldParts = question.question.split('**');

  return (
    <Wrapper
      onClick={() => {
        if (color !== null) {
          showAnswer();
        }
      }}
    >
      <QuestionPara>
        {boldParts.map((part, index) => {
          const isBold = index % 2 === 1;
          return isBold ? <strong key={index}>{part}</strong> : <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </QuestionPara>
      <Color color={color} />
    </Wrapper>
  );
};
