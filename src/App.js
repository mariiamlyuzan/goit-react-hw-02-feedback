import { Component } from 'react';
import FeedbackOptions from './/components/FeedbackOptions';
import Section from './/components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    visible: this.props.visible,
  };

  onIncrement = select => {
    this.setState(prevState => ({
      [select]: prevState[select] + 1,
    }));
    this.setState({ visible: true });
  };

  countTotalFeedback = () => {
    let values = Object.values(this.state);
    let total = -1;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let feedback = Math.ceil(
      (100 / this.countTotalFeedback()) * this.state.good,
    );
    return feedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.state.visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
