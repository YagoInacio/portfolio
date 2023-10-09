import { TagContainer, TagLabel } from './styles';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <TagContainer>
      <TagLabel>{label}</TagLabel>
    </TagContainer>
  );
}
