import { Notification } from 'components/Notification/Notification';
import { List, Item } from './Statistics.styled';

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
          <li>
            Total: <b>{total}</b>
          </li>
          <li>
            Positive feedback: <b>{percentage}%</b>
          </li>
        </List>
      ) : (
        <Notification message={'There is no feedback yet'} />
      )}
    </>
  );
};
