interface Experience {
  id: number;
  position: string;
  company: string;
  logo: string;
  period: string;
  summary: string[];
  techs: string[];
}

export const experiences: Experience[] = [
  {
    id: 3,
    position: 'Backend Developer',
    company: 'Insole Energia Solar',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQFiVCumSWPzug/company-logo_100_100/0/1630641746353?e=1709164800&v=beta&t=8sFQ-Jto-vvKATXMAXdRotsyonWamfYQgZrewjiNByI',
    period: 'May 2021 - Present',
    summary: [
      `Responsible for the solar power plants monitoring system's backend, developing new features and bugfixes`,
      `Important part of the decision making process regarding new features and prioritization`,
      `Implemented the OAUTH2 authentication flow for all the company's systems, using Amazon Cognito`,
      `Designed the new solution's topology to allow better scalability, using microservices concepts and Kafka for asynchronous communication`,
      `Lead the developing team on the migration from the monolithic topology to microservices`,
      `Migrated all the production environment to Kubernetes (AWS EKS), implementing the entire DevOps pipeline. Improved solution's availability SLA from 90% to 99%`,
    ],
    techs: ['Typescript', 'NestJS', 'PostgreSQL', 'AWS', 'Kubernetes', 'Github Actions', 'Kafka', 'Prometheus', 'Grafana']
  },
  {
    id: 2,
    position: 'Embedded Software Developer',
    company: 'Insole Energia Solar',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQFiVCumSWPzug/company-logo_100_100/0/1630641746353?e=1709164800&v=beta&t=8sFQ-Jto-vvKATXMAXdRotsyonWamfYQgZrewjiNByI',
    period: 'Jun 2020 - May 2021',
    summary: [
      `Development of IoT devices capable of acquiring all data from solar power plants to improve the company's monitoring system allowing proactive actions to identify and fix problems and malfunctions`,
      `Development of IoT devices to collect data of electrical energy consumption for remote monitoring`,
    ],
    techs: ['C++', 'FreeRTOS', 'MQTT', 'Docker']
  },
  {
    id: 1,
    position: 'Hardware Developer',
    company: 'ConnectON Ambientes Inteligentes',
    logo: 'https://media.licdn.com/dms/image/C4D0BAQHXKlbW76fxVQ/company-logo_100_100/0/1630570856993/connecton_ambientes_inteligentes_logo?e=1709164800&v=beta&t=8OUikK18HrbP4moHkIjxz5cCVqU2UikZFJhUlG4AGjY',
    period: 'Nov 2018 - Jun 2020',
    summary: [
      `Developed IoT devices that allow the customers to monitor and manage their HVAC systems remotely, providing information on energy consumption and waste detection`,
    ],
    techs: ['C', 'ESP', 'Proteus']
  },
]