export const projects = [
  {
    id: 1,
    title: 'Solar Power Plants Monitoring System',
    description: `
      * Led backend development for a solar power plant monitoring project, successfully integrating data from various inverter manufacturers' dataloggers and the company's proprietary datalogger into a unified platform.
      * Designed and implemented a system using NodeJS, Typescript/Javascript, and PostgreSQL, enabling real-time monitoring and control of over 3000 solar plants.
      * Played a key role in decision-making processes, contributing to feature prioritization and ensuring alignment with the needs of the monitoring team and clients.
      * Developed a robust messaging system using MQTT Broker and Kafka Cluster for receiving data from the company's dataloggers, enhancing data integration and processing.
      * Deployed the system on AWS's Cloud environment, initially using Docker containers on EC2 instances and NGINX as a Proxy server, later migrated to a Kubernetes cluster (EKS) following the DevOps cycle.
      * Implemented CI/CD using Github Actions for seamless deployment and continuous integration, ensuring efficient development workflows.
      * Set up monitoring using Prometheus and Grafana, providing comprehensive insights into system performance and proactive issue detection.
      * Delivered a powerful tool that improved uptime and performance by enabling proactive issue resolution, reducing downtime for solar plants.
      * Generated periodic reports that offered clear and useful information to clients, keeping them informed about the health and performance of their solar plants.
      * Continuously prioritized new features and addressed technical debt to maintain system quality and reliability.
      * Committed to ongoing updates and enhancements to meet evolving client needs, ensuring the system remains responsive and up to date.    
    `,
    outcome: `
      Received positive feedback from clients regarding the system's visibility, transparency, and the quality of reports generated.
    `,
    tags: [
      'NodeJS',
      'Typescript',
      'PostgreSQL',
      'AWS',
      'CI/CD',
      'Docker',
      'Github',
      'Kubernetes',
      'Kafka',
      'Prometheus',
      'Grafana',
      'Nginx',
    ],
    mainTags: ['NodeJS', 'Typescript', 'PostgreSQL', 'AWS', 'Kubernetes'],
  },
  {
    id: 2,
    title: 'Energy Consumption Managing Platform',
    description: `
      * Spearheaded the development of a software solution to address the challenge of monitoring energy consumption and quality in corporate environments, enabling effective energy management and the detection of critical machine or process failures.
      * Designed the backend and cloud-based architecture of the software, utilizing Node, Typescript/Javascript, and PostgreSQL to collect and process data from IoT devices in real-time.
      * Implemented a robust infrastructure, including a Kubernetes Cluster on AWS (EKS), a CI/CD pipeline (GitHub Actions and Docker), and application monitoring (Prometheus and Grafana), ensuring scalable and reliable operations.
      * Developed web and mobile applications to provide clients with insightful information and real-time alerts regarding energy consumption and anomalies, empowering them to make informed decisions on energy efficiency.
      * Managed the project's production state, successfully monitoring data from over 50 devices and serving approximately 20 clients.
      * Regularly introduced new features to enhance the customer experience and ensure the solution remains up-to-date and aligned with evolving client needs.
      * Proactively addressed technical debt to maintain the software's quality and reliability, ensuring efficient and consistent performance.
      * Collaborated closely with the IoT device development team to ensure seamless integration and compatibility between the hardware and software components.
      * Actively participated in decision-making processes, contributing to feature prioritization and aligning the software's roadmap with business goals.
      * Continuously monitored industry trends and emerging technologies to identify opportunities for innovation and improvement within the software solution.
    `,
    outcome: `
    Received positive feedback from clients regarding the software's ability to provide valuable insights and alerts, enabling them to optimize energy usage and prevent critical failures.
    `,
    tags: [
      'NodeJS',
      'Typescript',
      'PostgreSQL',
      'AWS',
      'CI/CD',
      'Docker',
      'Github',
      'Kubernetes',
      'Kafka',
      'Prometheus',
      'Grafana',
      'Nginx',
      'Redis',
    ],
    mainTags: ['NodeJS', 'Typescript', 'PostgreSQL', 'Kafka', 'Kubernetes'],
  },
  {
    id: 3,
    title: 'Firmware Over-The-Air Upgrade Manager',
    description: `
      * Developed a solution to address the challenge of efficiently upgrading the firmware of numerous hardware devices located in remote areas, encompassing a comprehensive Firmware Over-The-Air Upgrade Manager that improves the upgrade process and ensures seamless firmware updates for all devices involved.
      * Implemented a robust repository that stores multiple versions of firmware binaries from different devices. This repository uses AWS S3 and is securely integrated with GitHub, empowering developers to effortlessly manage firmware versions through a web application. This integration further enabled the seamless integration of the continuous development pipeline for the hardware.
      * Developed a web application that intelligently identifies and provides the correct version of firmware upgrade for each specific hardware device or group of devices. This intelligent matching ensures that devices receive the appropriate updates without any errors or incompatibilities.
      * Designed and implemented the entire system architecture, encompassing backend, frontend, and cloud-based components. Leveraging the power of Node, Typescript/Javascript, and PostgreSQL.    
    `,
    outcome: `
      System is being used frequently by...
    `,
    tags: [
      'NodeJS',
      'Typescript',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Github',
      'ReactJS',
    ],
    mainTags: ['NodeJS', 'Typescript', 'PostgreSQL', 'MongoDB', 'ReactJS'],
  },
  {
    id: 4,
    title: 'Dive Scheduler',
    description: `
      * Developed a user-friendly web application to streamline the management of diving trips along the coast of Pernambuco, Brazil, allowing efficient tracking of equipment checklists, client certifications, boat costs, and staff assignments.
      * Designed, developed, and deployed the application as the sole backend developer, utilizing technologies such as Node, Typescript/Javascript, and PostgreSQL.
      * Created a secure and accessible platform with appropriate access permissions for both clients and staff members, enabling clients to easily book trips and staff members to access trip schedules, client information, equipment checklists, and associated costs.
      * Implemented sales metrics for managers to make data-driven decisions and effectively plan future trips, enhancing business operations.
      * Utilized AWS EC2, Docker, and AWS ECR for application deployment, ensuring scalability and reliability.
      * Established a CI/CD pipeline using GitHub Actions, enabling seamless integration and deployment of new features and updates.
      * Collaborated closely with stakeholders to understand requirements, refine features, and ensure the application met the company's specific needs for diving trip management.
      * Conducted thorough testing and quality assurance processes to guarantee the application's functionality and stability.
      * Developed comprehensive documentation to assist users and provide a reference for future maintenance and enhancements.
      * Received positive feedback from clients and staff members regarding the user-friendly interface and the application's ability to streamline trip management processes.
      * Proactively addressed technical issues and optimized system performance, ensuring a smooth user experience.
      * Demonstrated strong project management skills, delivering the application within agreed-upon timelines and budget constraints.
      * Continuously monitored industry trends and emerging technologies to identify opportunities for further improving the application's functionality and user experience.    
    `,
    outcome: `
    The project remains actively utilized to this day, with ongoing minor freelancer contracts dedicated to implementing new features and enhancing existing ones.
    `,
    tags: [
      'NodeJS',
      'Typescript',
      'PostgreSQL',
      'AWS',
      'CI/CD',
      'Docker',
      'Github',
    ],
    mainTags: ['NodeJS', 'Typescript', 'PostgreSQL', 'AWS', 'CI/CD'],
  },
];
