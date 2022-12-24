import { Notification } from 'components/Notification/Notification';
import { List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ options, total, percentage }) => {
  const list = [];
  for (const key in options) {
    list.push(
      <Item key={key} name={key}>
        {key}: {options[key]}
      </Item>
    );
  }
  return (
    <>
      {total ? (
        <List>
          {list}
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
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
