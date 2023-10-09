import {
  ProfileAvatar,
  ProfileContacts,
  ProfileContainer,
  ProfileInfo,
} from './styles';
import linkedinIcon from '../../../public/linkedin.svg';
import githubIcon from '../../../public/github.svg';
import mailIcon from '../../../public/mail.svg';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://avatars.githubusercontent.com/yagoinacio" />

      <ProfileInfo>
        <strong>Hello there! I am Yago, a backend developer</strong>
        <span>NodeJS | Typescript | AWS Certified | SQL | Kubernetes</span>
        <ProfileContacts>
          <a
            href="https://www.linkedin.com/in/yagoinacio/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin link" />
          </a>
          <a
            href="https://github.com/YagoInacio?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="Github link" />
          </a>
          <a href="mailto:yagofaran@gmail.com" target="_blank" rel="noreferrer">
            <img src={mailIcon} alt="Mail link" />
          </a>
        </ProfileContacts>
      </ProfileInfo>
    </ProfileContainer>
  );
}
