import { Container, Card, Row, Col } from 'react-bootstrap';
import { JobParameter } from './types';
import { useNavigate } from 'react-router-dom';

type JobProps = {
    jobParameters: JobParameter[];
};

const JobListings = ({ jobParameters }: JobProps) => {
    const navigate = useNavigate();

    const applyHandle = (id: number) => {
        navigate(`/job-application/${id}`);
    };

    if (!jobParameters || jobParameters.length === 0) {
        return <p className="text-center mt-5">Currently no job is available</p>;
    }

    return (
        <Container className="py-5">
            <h2
                className="text-center mb-4 fw-bold"
                style={{ fontSize: '2.5rem', fontFamily: 'Garet' }}
            >
                Current Job Openings
            </h2>

            <Row className="g-4">
                {jobParameters.map((jobParameter) => (
                    <Col key={jobParameter.job_id} xs={12} sm={6} md={6} lg={6}>
                        <Card
                            className="job-card h-100 cursor-pointer"
                            onClick={() => applyHandle(jobParameter.job_id)}
                        >
                            <Card.Body>
                                <Card.Title
                                    as="h3"
                                    className="fw-medium mb-2"
                                    style={{ fontFamily: 'Garet' }}
                                >
                                    {jobParameter.title}
                                </Card.Title>

                                <Card.Text>
                                    <strong>Location:</strong> {jobParameter.location}
                                </Card.Text>

                                <Card.Text>
                                    <strong>Salary:</strong> {jobParameter.salary_package}
                                </Card.Text>

                                <div className="text-primary fw-semibold mt-2">
                                    Apply now →
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JobListings;
