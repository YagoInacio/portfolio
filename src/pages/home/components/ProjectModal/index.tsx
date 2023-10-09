import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButton,
  Content,
  Overlay,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  Title,
} from './styles';
import { X } from 'phosphor-react';
import { Tag } from '../Tag';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  mainTags: string[];
}

export function ProjectModal({ title, description, tags }: ProjectProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>{title}</Title>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <ScrollAreaRoot>
          <ScrollAreaViewport>
            {description.split('*').map((item, idx) => {
              const itemText = item.trim();
              if (itemText.length > 0) {
                return <p key={idx}>{item}</p>;
              }
              return undefined;
            })}
          </ScrollAreaViewport>
          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>

        <footer>
          {tags.map((tag, idx) => {
            return <Tag label={tag} key={idx} />;
          })}
        </footer>
      </Content>
    </Dialog.Portal>
  );
}
