import styled from '@emotion/styled';

export const FeedbackWrap = styled.div `
   display: flex;
   justify-content: center;
`

export const FeedBackList = styled.ul`
   margin-bottom: 30px;
`
export const FeedBackEmotion = styled.li `
   list-style: none;
   font-size: 20px;
   display: flex;
   gap: 8px;
   align-items: center;
   margin-right: 40px;
`

export const Icon = styled.span`
  color: #ff512f;
  padding-top: 3px;
`;

export const Summary = styled.ul`
list-style: none;
text-align: center;
   
`

export const Total = styled.li`
  text-align: start;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const PositiveFeedback = styled.li`
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  color: #ff512f;
`;