import PropTypes from 'prop-types';
import { Button, BtnWrap } from './FeedBackBtn.styled';

export const FeedbackOptions = ({ options, good, onButtonClick }) => {
  return (
    <BtnWrap>
      {Object.keys(options).map((value, id) => {
        return (
          <Button
            key={id}
            type="button"
            onClick={() => {
              onButtonClick(value);
            }}
          >
            {value}
          </Button>
        );
      })}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};