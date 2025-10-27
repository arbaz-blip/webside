import { Col, Container, Row } from 'react-bootstrap';
import overview from 'assets/images/solutions/singlestore-overview.png';

const Solution = () => {
    return (
        <>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Single Database for Data Intensive Application</h1>
                            <p className="mx-auto">
                                We are a SingleStore representatives and distributors in Pakistan, offering a new
                                generation data engine for enterprise data warehouse, data lake or high performance
                                database solution. With our partnership with SingleStore, we have the knowledge and
                                expertise to help you build high performance analytical or transactional applications.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative bg-gradient2">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <h1 className="display-3 fw-semibold">Your Unified Data Engine</h1>
                            <p className="mx-auto">
                                With a unified data engine for transactional and analytical workloads, SingleStoreDB
                                powers fast, real-time analytics and applications. SingleStore is optimized for
                                real-time analytics and transactional processing. It is designed to handle both OLAP
                                (Online Analytical Processing) and OLTP (Online Transaction Processing) workloads on
                                large-scale datasets. SingleStore uses a columnar storage format and in-memory
                                technology to provide high performance and low latency. It supports SQL as the primary
                                query language, and provides advanced features like distributed query processing, data
                                compression, and indexing.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5 py-6 position-relative">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1500">
                        <Col className="text-center">
                            <img
                                src={overview}
                                alt="overview"
                                className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Solution;
