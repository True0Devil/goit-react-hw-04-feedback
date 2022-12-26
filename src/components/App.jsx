import { Component } from 'react';
import { Section } from './common/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVotes = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: (prevState[name] += 1),
    }));
  };

  countTotalFeedback = () => {
    const votes = Object.values(this.state);
    return votes.reduce((acc, vote) => (acc += vote), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.handleVotes}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
