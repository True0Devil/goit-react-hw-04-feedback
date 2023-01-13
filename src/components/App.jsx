import { Section } from './common/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleVotes = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const votes = Object.values(options);
    return votes.reduce((acc, vote) => (acc += vote), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((options.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(options)} onClick={handleVotes} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
