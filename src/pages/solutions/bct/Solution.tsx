import { Col, Container, Row } from 'react-bootstrap';
import cuetrains from 'assets/images/solutions/3h-cuetrans.svg';
import rt360 from 'assets/images/solutions/rt360_credit_risk_suite.png';
import fueltrans from 'assets/images/solutions/FuelTrans-logo-768x138-1.png';
import procure360 from 'assets/images/solutions/procure360.png';

const solutionsData = [
  {
    id: 'procure360',
    image: procure360,
    alt: 'Procure 360',
    height: 100,
    description:
      'Procure 360 is an integrated AI-powered Supplier Management Solution that enables digital transformation across your entire procurement and vendor value chain, from source to pay. Centralize all your entire procurement activities on a single platform, from supplier registration to selection, tender management, contract management, payment and workflow management, vendor profiling, risk management and spend visibility.',
  },
  {
    id: 'rt360',
    image: rt360,
    alt: 'rt360',
    height: 100,
    description:
      'rt360 is a risk management product suite that manages the entire risk portfolio of banks and financial institutions, including credit risk, capital allocation, pricing risk, liquidity risk, model risk and operational risk. Major banks and financial institutions use rt360 to mitigate risks and improve performance.',
  },
  {
    id: 'cuetrains',
    image: cuetrains,
    alt: 'CueTrans',
    height: 50,
    description:
      'CueTrans is an Integrated Logistics and Transportation products suite that helps manage and optimize the end-to-end process for cargo, materials and people logistics. CueTrans helps to manage the entire logistics process lifecycle, right from capturing and mapping material or resource demand to planning and execution, and ensuring the safety of material, passenger, vehicle and driver.',
  },
  {
    id: 'fueltrans',
    image: fueltrans,
    alt: 'FuelTrans',
    height: 50,
    description:
      'FuelTrans is an IoT and analytics driven solution that automates the entire order-to-cash cycle and offers a comprehensive view of the secondary fuel supply chain for retail and commercial business segments. FuelTrans automates the entire Secondary Supply Chain with almost no-manual intervention.',
  },
];

const Solution = () => {
  return (
    <>
      <section className="my-5 py-6 position-relative">
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1500">
            <Col className="text-center">
              <h1 className="display-3 fw-semibold">
                Business Solutions To Enable Digital Transformation
              </h1>
              <p className="mx-auto">
                We distribute business solutions from Bahwan Cybertek (BCT) in Pakistan, offering
                matures and established business solution for enterprises. With our partnership with
                BCT, we have the knowledge and expertise to help you manage risks, drive efficiency and
                drive growth or your enterprise.
              </p>
            </Col>
          </Row>
          <Row className="pt-5 justify-content-center">
            {solutionsData.map((solution) => (
              <Col key={solution.id} md={6} data-aos="fade-up" data-aos-duration="300" className="text-center">
                <img src={solution.image} alt={solution.alt} className="img-fluid d-block mx-auto mb-5" style={{ height: solution.height }} />
                <p className="mb-4 pb-3 text-muted">
                  {solution.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Solution;
