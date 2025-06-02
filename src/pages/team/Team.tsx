import { Badge, Col, Container, Row } from 'react-bootstrap';
import fayyaz from '../../assets/images/Teams/fayyaz.jpg'

// types
import { TeamMember } from './types';

type TeamProps = {
    teamMembers: TeamMember[];
};

const Team = ({ teamMembers }: TeamProps) => {



    return (
        <section className="pb-5 pt-6 mt-4 position-relative" data-aos="fade-up">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            Our Team
                        </Badge>
                        <h1 className="display-5 fw-medium">Meet Our Team</h1>
                        <p className="text-muted">
                            The most important part of any business is people. Our company employs only professionals in
                            their field with a high level of expertise and a huge desire to improve their skills to
                            provide best technology services every day.
                        </p>
                        <p className="text-muted">
                            Our engineers develop solid business and data solution, and our designers do not just
                            develop flows and mockups, but come up with a solution for a successful user experience and
                            user-friendly interface.
                        </p>
                        <p className="text-muted">
                            Business developers and project managers are always in touch with customers, ready to
                            resolve any issues as quickly as possible. Even our CEO presents on meetings and answers all
                            our clients’ questions.
                        </p>
                        <p className="text-muted">
                            We want to enable top-notch products efficiently, provide great professional services and
                            build long-term relationships with our customers, as well as grow together with them.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center" >
                    <Col lg={4} md={6} >

                        <div className="d-flex align-items-center mb-4 pb-md-3">
                            <img
                                src={fayyaz}
                                alt="avatar"
                                className="img-fluid avatar-md d-block rounded me-3"
                            />
                            <div className="flex-grow-1">
                                <h5 className="mt-0 mb-1 fw-medium">Fayyaz Alam</h5>
                                <p className="text-muted fw-medium mb-0">Chief Executive Officer</p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row >
                    {(teamMembers || []).map((teamMember, index) => {
                        return (
                            <Col lg={4} md={6} key={index.toString()}>

                                <div className="d-flex align-items-center mb-4 pb-md-3">
                                    <img
                                        src={teamMember.avatar}
                                        alt="avatar"
                                        className="img-fluid avatar-md d-block rounded me-3"
                                    />
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0 mb-1 fw-medium">{teamMember.name}</h5>
                                        <p className="text-muted fw-medium mb-0">{teamMember.designation}</p>
                                    </div>
                                </div>

                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Team;
