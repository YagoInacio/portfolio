import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { Projects } from './components/Projects';
import { Tag } from './components/Tag';
import {
  HomeContainer,
  SummaryCard,
  SummaryContainer,
  SummaryTags,
} from './styles';

export function Home() {
  return (
    <div>
      <Header />
      <Profile />

      <HomeContainer>
        <SummaryContainer>
          <SummaryCard>
            <header>
              <strong>About me</strong>
            </header>
            <p>
              Web Backend Developer with 4+ years of experience specializing in
              developing robust solutions for diverse industries. Skilled in
              designing and implementing systems to integrate data from various
              sources based on IoT technologies and devices. Experienced in
              utilizing technologies like Node, Typescript/Javascript, and
              PostgreSQL to create scalable and efficient backend architectures.
              Proficient in deploying applications on cloud environments like
              AWS and Azure, utilizing Docker containers and Kubernetes
              clusters. Adept in implementing CI/CD pipelines using tools like
              GitHub Actions for seamless development and deployment processes.
              Committed to addressing technical debt and prioritizing new
              features to ensure high-quality, reliable systems that meet the
              evolving needs of clients.
            </p>
          </SummaryCard>
          <SummaryCard>
            <header>
              <strong>Technologies</strong>
            </header>
            <SummaryTags>
              <Tag label="NodeJS" />
              <Tag label="Typescript" />
              <Tag label="AWS" />
              <Tag label="Docker" />
              <Tag label="PostgreSQL" />
              <Tag label="Kubernetes" />
              <Tag label="MongoDB" />
              <Tag label="Git" />
              <Tag label="NestJS" />
              <Tag label="Kafka" />
              <Tag label="CI/CD" />
              <Tag label="REST APIs" />
              <Tag label="ReactJS" />
              <Tag label="Prometheus" />
              <Tag label="Grafana" />
              <Tag label="Python" />
              <Tag label="Redis" />
              <Tag label="Azure" />
              <Tag label="Nginx" />
              <Tag label="JestJS" />
              <Tag label="DDD" />
              <Tag label="SOLID" />
              <Tag label="Code Design" />
              <Tag label="Data Structures" />
            </SummaryTags>
          </SummaryCard>
        </SummaryContainer>

        <Projects />
      </HomeContainer>

      <Footer />
    </div>
  );
}
