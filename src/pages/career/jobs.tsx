import { Container, Card } from 'react-bootstrap';
import { JobParameter } from './types';
import { useNavigate } from 'react-router-dom';


type JobProps = {
    jobParameters: JobParameter[]
}

const JobListings = ({ jobParameters }: JobProps) => {
    const navigate = useNavigate()

    const applyHandle = (jobParam: JobParameter, id: any) => {

        navigate(`/job-application/${id}`, { state: jobParam });
    }

    if (!jobParameters) {
        return (<p>Currently no job is available</p>)
    }

    return (
        <Container>
            <h1 className="text-center m-3">Current Job Openings</h1>
            {(jobParameters || []).map((jobParameter, index) => {
                return (
                    <div key={index.toString()} className='shadow-lg m-4 d-flex rounded align-items-center hover-card cursor-pointer'
                        onClick={() => applyHandle(jobParameter, jobParameter.job_id)}>
                        <Card>

                            <Card.Body>
                                <Card.Title ><h4>{jobParameter.title}</h4></Card.Title>
                                <Card.Text>
                                    {jobParameter.location}

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                )

            })}

        </Container>
    )
}

export default JobListings