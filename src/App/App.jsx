import React, { useState } from 'react';
import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/Feedback/FeedbackBtn';
import { Notification } from '../components/Notification/Notification';
import { ContainerWrap } from '../App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;

  const countTotalFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return console.warn(`this ${value} is not found`);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return +Math.ceil((good / total) * 100);
  };

  return (
    <ContainerWrap>
      <Section title="Please leave your feedback">
        <FeedbackOptions onButtonClick={countTotalFeedback} options={options} />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification
            message={'There is no feedback, please leave your feedback'}
          />
        )}
      </Section>
    </ContainerWrap>
  );
};
