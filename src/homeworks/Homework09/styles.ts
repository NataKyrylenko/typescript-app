import styled from "@emotion/styled";

interface ResultsBlockProps{
  isShowResult: boolean
}

export const Homework09Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  width: 50%;
`;

export const ResultContainer = styled.div<ResultsBlockProps>`
  display: ${({isShowResult}) => isShowResult ? 'flex':'none'};
  width: 100%;
  gap: 10px;
  padding: 10px;

`;

export const ResultElement = styled.div`
  width: 50%;
  padding: 7px;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 22px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
