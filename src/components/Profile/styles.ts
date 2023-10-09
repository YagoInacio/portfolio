import styled from 'styled-components';

export const ProfileContainer = styled.section`
  @media (max-width: 1375px) {
    margin-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: -1.5rem;
  }

  width: 100%;
  max-width: 1328px;
  margin: 0 auto;

  display: flex;
  gap: 1.5rem;

  margin-top: -2rem;

  align-items: center;
`;

export const ProfileAvatar = styled.img`
  width: calc(10rem + 12px);
  height: calc(10rem + 12px);
  border-radius: 20rem;
  border: 4px solid ${(props) => props.theme['blue-300']};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }

  span {
    font-weight: 600;
    font-size: 0.75rem;
  }
`;

export const ProfileContacts = styled.div`
  display: flex;
  gap: 0.75rem;
`;
