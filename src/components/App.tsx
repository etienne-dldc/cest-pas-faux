import React from 'react';
import { QUESTIONS, QuestionData } from '../questions';
import { Answer } from './Answer';
import { ColorType, COLORS } from './Color';
import { Home } from './Home';
import { Question } from './Question';
import { End } from './End';

type GameState = 'home' | 'question' | 'color' | 'answer';

interface Step {
  question: QuestionData;
  color: ColorType;
  time: number;
}

type Steps = Array<Step>;

const generateSteps = (): Steps => {
  const q = QUESTIONS.map(
    (q): Step => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const time = q.time || q.question.length * 50;
      return {
        color,
        question: q,
        time,
      };
    }
  );
  for (let i = 0; i < q.length; i++) {
    const i1 = Math.floor(Math.random() * q.length);
    const i2 = Math.floor(Math.random() * q.length);
    if (i1 !== i2) {
      const temp = q[i1];
      q[i1] = q[i2];
      q[i2] = temp;
    }
  }
  return q;
};

const App: React.FC = () => {
  const [gameState, setGameStateInternal] = React.useState<GameState>('home');
  const [steps, setSteps] = React.useState<Steps>(generateSteps);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const timerRef = React.useRef<number | null>(null);

  const setGameState = React.useCallback((step: GameState) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setGameStateInternal(step);
  }, []);

  const step = steps[questionIndex];

  const showQuestion = React.useCallback(
    (increment: boolean = true) => {
      if (increment) {
        setQuestionIndex(prev => prev + 1);
      }
      setGameState('question');
      timerRef.current = window.setInterval(() => {
        setGameState('color');
      }, step.time);
    },
    [setGameState, step]
  );

  const start = React.useCallback(() => {
    setSteps(generateSteps());
    setQuestionIndex(0);
    showQuestion(false);
  }, [showQuestion]);

  const showAnswer = React.useCallback(() => {
    setGameState('answer');
  }, [setGameState]);

  if (step === undefined) {
    return <End />;
  }

  const isWrong = step.color === 'dumb' || step.color === 'faux' || step.color === 'red';

  switch (gameState) {
    case 'home':
      return <Home start={start} />;
    case 'question':
      return <Question question={step.question} showAnswer={showAnswer} color={null} />;
    case 'color':
      return <Question question={step.question} showAnswer={showAnswer} color={step.color} />;
    case 'answer':
      return <Answer question={step.question} next={() => showQuestion()} isWrong={isWrong} />;
    default:
      return <div>Whaaat ?</div>;
  }
};

export default App;
