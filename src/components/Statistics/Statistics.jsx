import { Notification } from 'components/Notification/Notification';
import { List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  const stats = [
    { count: good, title: 'Good' },
    { count: neutral, title: 'Neutral' },
    { count: bad, title: 'Bad' },
  ];

  return (
    <>
      {total ? (
        <List>
          {stats.map(stat => (
            <Item key={stat.title} name={stat.title}>
              {stat.title}: {stat.count}
            </Item>
          ))}
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </List>
      ) : (
        <Notification message={'There is no feedback yet'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
