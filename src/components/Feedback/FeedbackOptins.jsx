import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <>
      {options.map(option => (
        <Button key={option} name={option} onClick={onClick}>
          {option}
        </Button>
      ))}
    </>
  );
};
