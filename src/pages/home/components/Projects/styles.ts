import styled from 'styled-components';
import { CaretLeft, CaretRight } from 'phosphor-react';

export const ProjectsContainer = styled.main`
  display: flex;
  max-width: 1328px;
  margin: 0 auto;
  width: 100%;
`;

export const ProjectsSlider = styled.div``;

export const ProjectBox = styled.div`
  background: ${(props) => props.theme['blue-700']};
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  header {
    font-size: 1.25rem;
  }

  footer {
    margin-top: 0.5rem;

    display: flex;
    gap: 1rem 0.5rem;
    padding-top: 0;

    font-size: 0.75rem;
  }
`;

export const ProjectText = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 0.5rem 0;
  max-height: 390px;
  margin-top: 0.25rem;

  line-height: 1.5rem;
  font-size: 0.75rem;

  p::before {
    content: '•';
  }
`;

export const ReadMoreText = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme['white-100']};
  align-self: end;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme['blue-300']};
    transition:
      text-decoration 0.2s,
      color 0.2s;
  }
`;

export const ArrowLeft = styled(CaretLeft)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: ${(props) => props.theme['white-100']};
  cursor: pointer;
  left: 5px;
`;

export const ArrowRight = styled(CaretRight)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: ${(props) => props.theme['white-100']};
  cursor: pointer;
  left: auto;
  right: 5px;
`;

interface ArrowContainerProps {
  direction: 'left' | 'right';
}

export const ArrowContainer = styled.div<ArrowContainerProps>`
  width: 10vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: pointer;

  background: linear-gradient(
    ${(props) => (props.direction === 'left' ? 'to left' : 'to right')},
    #00000000,
    ${(props) => props.theme['blue-700']}
  );
  left: ${(props) => (props.direction === 'left' ? 0 : 'auto')};
  right: ${(props) => (props.direction === 'left' ? 'auto' : 0)};
`;
