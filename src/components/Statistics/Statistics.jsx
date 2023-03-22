import PropTypes from 'prop-types';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';
import {
  FeedBackEmotion,
  FeedBackList,
  Icon,
  Total,
  PositiveFeedback,
  Summary,
  FeedbackWrap,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackWrap>
      <FeedBackList>
        <FeedBackEmotion>
          <Icon>{<FaRegSmile />}</Icon>
          <span>Good: {good}</span>
        </FeedBackEmotion>
        <FeedBackEmotion>
          <Icon>{<FaRegMeh />}</Icon>
          <span> Neutral: {neutral}</span>
        </FeedBackEmotion>
        <FeedBackEmotion>
          <Icon>{<FaRegFrown />} </Icon>
          <span>Bad: {bad}</span>
        </FeedBackEmotion>
      </FeedBackList>
      <Summary>
        <Total>Total: {total}</Total>
        <PositiveFeedback>
          Positive feedback: {positivePercentage()}%
        </PositiveFeedback>
      </Summary>
    </FeedbackWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};
