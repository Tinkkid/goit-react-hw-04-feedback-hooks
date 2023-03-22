import React, { Component } from 'react';
import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/Feedback/FeedbackBtn';
import { Notification } from '../components/Notification/Notification';
import { ContainerWrap } from '../App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return +Math.ceil((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <ContainerWrap>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onButtonClick={this.handleButtonClick}
            options={this.state}
            good = {good}
          />
        </Section>

        <Section title={'Statistics'} >
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification
              message={'There is no feedback, please leave your feedback'}
            />
          )}
        </Section>
      </ContainerWrap>
    );
  }
}
