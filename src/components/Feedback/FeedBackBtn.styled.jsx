import styled from '@emotion/styled';

export const BtnWrap = styled.div`
   display: flex;
   justify-content: center;
`

export const Button = styled.button`
  margin: 10px;
  padding: 15px 30px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f7ad45 51%,
      #35d427 100%
    );

    &:active {
      transform: scale(0.95);
    }
  }
`;

