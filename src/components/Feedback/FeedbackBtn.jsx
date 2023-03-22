import PropTypes from 'prop-types';
import { Button, BtnWrap } from './FeedBackBtn.styled';

export const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <BtnWrap>
      {options.map((value, id) => {
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
