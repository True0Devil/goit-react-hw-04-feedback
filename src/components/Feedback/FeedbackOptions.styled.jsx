import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px;

  font-family: inherit;
  font-size: 18px;
  font-weight: bold;

  background-color: #e5c08a;
  /* outline: none; */
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${props => handleColor(props.name)};
  }

  :not(:last-child) {
    margin-right: 18px;
  }
`;

const handleColor = name => {
  switch (name) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'grey';
    case 'bad':
      return 'red';

    default:
      return 'black';
  }
};
