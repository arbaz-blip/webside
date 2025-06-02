import { Col, Container, Row } from 'react-bootstrap';
import bpm from 'assets/images/dpc/processmanagement.webp';
import rpa from 'assets/images/dpc/roboticprocessautomation.webp';
import eip from 'assets/images/dpc/Enterprise Integration Platform.webp';
import api from 'assets/images/dpc/API Management Platform.webp';
import bdp from 'assets/images/dpc/Big Data Platform.webp';
import va from 'assets/images/dpc/Visual Analytics.webp';
import sa from 'assets/images/dpc/Streaming Analysis.webp';
import ai from 'assets/images/dpc/ai.webp';

interface PlatformData {
  image: string;
  title: string;
  description: string;
}

const platforms: PlatformData[] = [
  {
    image: bpm,
    title: 'Business Process Management (BPM)',
    description:
      'Solution that automates and manages the end-to-end processes within an organization, with the goal of improving efficiency, reducing costs, and increasing process visibility. Covers key areas like process modeling, execution, monitoring, optimization and governance.',
  },
  {
    image: rpa,
    title: 'Robotic Process Automation (RPA)',
    description:
      'Automates repetitive and routine tasks that are typically performed by human workers. Benefits of RPA include increased efficiency and productivity, improved accuracy, reduced costs, and increased compliance with regulations. Free up human workers to focus on higher-value tasks and enable organizations to scale their operations.',
  },
  {
    image: eip,
    title: 'Enterprise Integration Platform (EIP)',
    description:
      'Technology solution that enables the integration and coordination of multiple systems and applications within an organization. The goal of an EIP is to ensure that information flows seamlessly between different systems and applications, enabling data to be shared and accessed by multiple users and systems.',
  },
  {
    image: api,
    title: 'API Management Platform',
    description:
      'The goal of an API Management Platform is to provide a centralized and unified approach to managing APIs, which can improve efficiency, security, and innovation. Provides the tools, capabilities, and infrastructure to manage APIs throughout their lifecycle.',
  },
  {
    image: bdp,
    title: 'Big Data Platform',
    description:
      'Provides a centralized solution for managing, processing, and analyzing big data, which can support data-driven decision making and drive business value. The platform enables organizations to process and analyze data in real-time, providing insights and business opportunities that would otherwise go unnoticed.',
  },
  {
    image: va,
    title: 'Visual Analytics',
    description:
      'Provides visual representations and interactive tools to explore, analyze, and make sense of complex data. The goal of advanced visual analytics is to enable users to quickly and easily gain insights and find patterns in large and complex data sets that might not be immediately apparent.',
  },
  {
    image: sa,
    title: 'Streaming Analytics',
    description:
      'Real-time processing and analysis of data as it is generated and delivered in a continuous stream, rather than being stored and analyzed in batch mode. The goal of streaming analytics is to provide organizations with the ability to quickly identify and respond to business opportunities and risks, by analyzing data in real-time.',
  },
  {
    image: ai,
    title: 'Conversational AI',
    description:
      'Can be used in a variety of applications, including customer service, sales, and marketing. Provides a more convenient and efficient customer experience, by allowing users to access information and services using natural language and can also help to reduce costs by automating repetitive tasks.',
  },
];

const Platform = () => {
  return (
    <>
      <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
        <Container>
          {platforms.map((platform, index) => (
            <Row key={index} className="align-items-center mb-6 pb-lg-5">
              <Col
                lg={6}
                xs={12}
                className={`order-1 order-md-${index % 2 === 0 ? 0 : 1}`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="1500">
                <div className="mb-4 mb-lg-0 text-center">
                  <h1 className="display-4 fw-medium mb-3">{platform.title}</h1>
                  <p className="text-muted mx-auto mb-4 pb-3">{platform.description}</p>
                </div>
              </Col>
              <Col
                lg={{ span: 5, offset: 1 }}
                xs={12}
                className={`order-0 order-md-${index % 2 === 0 ? 1 : 0}`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-duration="1500">
                <img src={platform.image} alt={platform.title} className="img-fluid d-flex mx-auto" />
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Platform;
