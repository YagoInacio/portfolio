import styled from 'styled-components';

export const HomeContainer = styled.main`
  @media (max-width: 1375px) {
    margin: 0 1rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  footer {
    padding-top: 1rem;
  }
`;

export const SummaryContainer = styled.section`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 1.5rem 0;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

export const SummaryCard = styled.div`
  background: ${(props) => props.theme['blue-700']};
  border-radius: 6px;
  padding: 1rem;

  header {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.25rem;
    line-height: 1.5rem;
  }
`;

export const SummaryTags = styled.div`
  margin-top: 0.25rem;

  display: flex;
  gap: 1rem 0.5rem;
  flex-wrap: wrap;
`;
