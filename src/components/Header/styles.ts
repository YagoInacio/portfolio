import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-700']};
  padding: 1.5rem;

  @media (max-width: 800px) {
    padding-bottom: 3rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: right;
  align-items: center;

  @media (max-width: 1375px) {
    margin-left: 1rem;
    padding-right: 1rem;
    padding-left: 0;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
