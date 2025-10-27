import { Col, Container, Row } from 'react-bootstrap';
import overview from 'assets/images/solutions/3e-Nintex-Solution-Overview.png';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Manage, Automate And Optimize Business Processes</h1>
                            <p className="mx-auto">
                                We are a Nintex partner, offering their world leading solutions for process management,
                                workflow automation, robotic process automation, document automation and e-signatures.
                                Our goal is to provide you with the tools, resources, and expertise you need to succeed.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <img src={overview} alt="overview" className="img-fluid d-block mx-auto mt-4 mt-lg-0" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Solution;
