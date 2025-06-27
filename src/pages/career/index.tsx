import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import { JobParameter } from './types';
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import hero from 'assets/images/4b7001f0-21bb-4aad-b685-e4d0210f26cd.webp';
import Footer from 'pages/Home/Footer';
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
        return <Spinner animation='border' />
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
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(0.5px)',
                    }}
                ></div>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero />
            </div>

            {/* <Team teamMembers={teamMembers} /> */}

            <Job jobParameters={jobs} />
            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;
