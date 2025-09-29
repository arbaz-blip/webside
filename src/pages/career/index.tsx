import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import { JobParameter } from './types';
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import hero from 'assets/images/cinergie-digital-join-our-team.jpg.jpg';
import Footer from 'pages/Home/Footer';

import Connect from 'components/shared/Connect';
// import Team from './Team';
// import { teamMembers } from './data';
// import { jobListings } from './data'
import Job from './jobs'

type JobProps = {
    jobParameters: JobParameter[]
}

const Blog = () => {
    const [jobs, setJobs] = useState<JobParameter[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const fetchJobs = async (): Promise<void> => {
        // console.log(`http://recruitment.test/api/jobs`)
        try {
            const response = await axios.get("https://api.cinergiedigital.com/recruitment/admin/api_jobs.php")
            const jobsData: JobParameter[] = response.data.data
            setJobs(jobsData)
            // console.log("Job data: ", jobsData)


        }
        catch (err) {
            console.log("Error fetching the jobs: ", err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchJobs()
    }, [])

    // console.log("Data: ", jobs)

    if (loading) {
        return (<div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column align-items-center gap-2">
                <Spinner animation="border" variant="primary" role="status" />
                <div>Loading...</div>
            </div>
        </div>)
    }

    return (
        <>
            <div
                className="bg-gradient2"
                style={{
                    background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    position: 'relative',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 50,
                        width: '100%',
                        height: '100%',
                        
                        
                    }}
                ></div>

                          <Navbar1
    hideSearch
    fixedWidth
    navClass="navbar-light bg-white zindex-10" // Changed to navbar-light and added bg-white
    buttonClass="btn-white text-white btn-sm"
/>

                <Hero />
            </div>

            {/* <Team teamMembers={teamMembers} /> */}

            <Job jobParameters={jobs} />
             <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
