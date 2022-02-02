import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={s.statistic}>Good: {good}</p>
      <p className={s.statistic}>Neutral: {neutral}</p>
      <p className={s.statistic}>Bad: {bad}</p>
      <p className={s.statistic}>Total: {total}</p>
      <p className={s.statistic}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
