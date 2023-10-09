import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  ProjectBox,
  ProjectText,
  ProjectsContainer,
  ProjectsSlider,
  ReadMoreText,
} from './styles';
import { Tag } from '../Tag';
import { projects } from '../../../../assets/projects';
import * as Dialog from '@radix-ui/react-dialog';
import { ProjectModal, ProjectProps } from '../ProjectModal';

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: () => void;
}

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    initial: 0,
    slides: () => {
      return projects.map(() => ({
        size: window.innerWidth > 1000 ? 0.36 : 0.7,
        spacing: 0.01,
      }));
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function handleArrowNavigation(action: 'prev' | 'next') {
    if (action === 'prev') {
      instanceRef.current?.prev();
    } else {
      instanceRef.current?.next();
    }
  }

  function Arrow(props: ArrowProps) {
    if (props.disabled) {
      return;
    }

    const direction = props.left ? 'left' : 'right';

    return (
      <ArrowContainer direction={direction} onClick={props.onClick}>
        {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
      </ArrowContainer>
    );
  }

  return (
    <ProjectsContainer>
      <ProjectsSlider ref={sliderRef} className="keen-slider">
        {(projects as ProjectProps[]).map((project) => {
          return (
            <ProjectBox key={project.id} className="keen-slider__slide">
              <header>
                <strong>{project.title}</strong>
              </header>

              <ProjectText>
                {project.description.split('*').map((item, idx) => {
                  const itemText = item.trim();
                  if (itemText.length > 0) {
                    return <p key={idx}>{item}</p>;
                  }
                  return undefined;
                })}
              </ProjectText>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <ReadMoreText>...read more</ReadMoreText>
                </Dialog.Trigger>

                <ProjectModal {...project} />
              </Dialog.Root>

              <footer>
                {project.mainTags.map((tag, idx) => {
                  return <Tag label={tag} key={idx} />;
                })}
              </footer>
            </ProjectBox>
          );
        })}

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={() => handleArrowNavigation('prev')}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={() => handleArrowNavigation('next')}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </ProjectsSlider>
    </ProjectsContainer>
  );
}
