import { Col, Container, Row } from 'react-bootstrap';
import dce from 'assets/images/dpo/customerengagement.webp';
import dt from 'assets/images/dpo/digitaltransformation.webp';
import ddm from 'assets/images/dpo/datamanagement.webp';
import dba from 'assets/images/dpo/businessautomation.webp';
import dscm from 'assets/images/dpo/supplychainmanagement.webp';

interface PlatformData {
  image: string;
  title: string;
  description: string;
}

const platforms: PlatformData[] = [
  {
    image: dce,
    title: 'Digital Customer Engagement',
    description:
      'The ability to engage with customers through digital channels like mobile apps, websites, and social media.',
  },
  {
    image: dt,
    title: 'Digital Transformation',
    description:
      'The ability to integrate digital technologies into all aspects of the business, from operations to product development.',
  },
  {
    image: ddm,
    title: 'Digital Data Management',
    description:
      'The ability to collect, store, and analyze large amounts of data to inform decision-making and drive business insights.',
  },
  {
    image: dba,
    title: 'Digital Business Automation',
    description:
      'The ability to automate business processes using software, machine learning, and other technologies.',
  },
  {
    image: dscm,
    title: 'Digital Supply Chain Management',
    description:
      'The ability to manage the flow of goods and information within a supply chain using digital technologies.',
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
