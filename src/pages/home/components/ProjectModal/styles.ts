import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  @media (max-width: 1375px) {
    min-width: 90vw;
    max-width: 90vw;
  }
  min-width: 70rem;
  max-width: 70rem;
  border-radius: 6px;
  padding: 2rem;
  padding-bottom: 1rem;
  background: ${(props) => props.theme['blue-700']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  footer {
    margin-top: 0.5rem;

    display: flex;
    gap: 1rem 0.5rem;
    padding: 0.5rem;
    flex-wrap: wrap;

    font-size: 0.75rem;
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: 1.25rem;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['white-100']};
`;

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  height: 70vh;
  /* height: 400px; */
  border-radius: 6px;
  overflow: hidden;
  background-color: ${(props) => props.theme['blue-700']};
  margin-top: 1rem;

  @media (max-width: 1375px) {
    height: 50vh;
  }

  p {
    padding: 0.25rem 0;
    &::before {
      content: '•';
    }
  }
`;

export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding-right: 1.5rem;
  padding-left: 1rem;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  background: ${(props) => props.theme['blue-700']};
  transition: background 160ms ease-out;
  width: 1rem;
  border-radius: 50px;

  &:hover {
    background: ${(props) => props.theme['blue-700']};
  }
`;

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: ${(props) => props.theme['blue-400']};
  border-radius: 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;
