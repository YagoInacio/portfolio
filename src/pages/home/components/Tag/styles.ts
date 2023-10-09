import styled from 'styled-components';

export const TagContainer = styled.div`
  background: ${(props) => props.theme['blue-300']};
  border-radius: 50px;
  display: inline-block;
`;

export const TagLabel = styled.p`
  color: ${(props) => props.theme['white-100']};
  padding: 0 0.75rem;
`;
