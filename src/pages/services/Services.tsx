import { Col, Container, Row } from 'react-bootstrap';
import datastrategy from '../../assets/images/services/DataStrategy.webp';
import dataengineering from '../../assets/images/services/DataEngineering.webp';
import dataanalytics from '../../assets/images/services/DataAnalytics.webp';
import softwaredevelopment from '../../assets/images/services/SoftwareDevelopment.webp';
import applicationmaintenance from '../../assets/images/services/ApplicationMaintenance.webp';
import teamasaservice from '../../assets/images/services/TeamsAsAService.webp';
import staffaugmentation from '../../assets/images/services/ResourceAugmentation.webp';

interface ServiceData {
    id: string;
    image: string;
    title: string;
    description: string[];
}

const services: ServiceData[] = [
    {
        id: 'datastrategy',
        image: datastrategy,
        title: 'Data Strategy and Governance',
        description: [
            'Our consultants have experience helping organizations create and implement effective data strategies and governance practices.',
            'The goal of this service is to help organizations make the most of their data assets, by ensuring that their data is accurate, secure, and properly managed. This may include activities such as data architecture design, data quality assessment, data privacy and security planning, data governance policy creation, and change management.',
            'By working with our expert consultants, organizations can ensure that their data is aligned with their overall business goals and that they have a well-designed, sustainable data governance framework in place.',
        ],
    },
    {
        id: 'dataengineering',
        image: dataengineering,
        title: 'Data Engineering',
        description: [
            'This service will enable design, construction, and maintenance of data infrastructure for the efficient processing and storage of data.',
            'We specialize in data management and analysis. Our Data Engineers will be responsible for designing, building, and maintaining the technical systems and processes that support data-driven applications and analytics.',
            'We will work closely with your data analysts and data scientists to create scalable and efficient data pipelines, data warehouses, and data lakes. This includes tasks such as data ingestion, data cleansing, data transformation, and data storage.',
            'The goal of our data engineering services is to provide client organizations with a flexible and reliable data infrastructure that can handle large amounts of data and support a wide range of data-driven applications and analytics.',
            'By partnering with Cinergie Digital for data engineering needs, organizations can ensure that their data infrastructure is well-designed, secure, and scalable, while freeing up their own IT resources to focus on other core activities.',
        ],
    },
    {
        id: 'analytics',
        image: dataanalytics,
        title: 'Data Analytics',
        description: [
            'We will use technology of your choice to collect, process, and analyze data in order to extract insights and knowledge from data.',
            'The goal of data analytics technology services from Cinergie Digital is to help client organizations turn their data into actionable insights that can inform decision-making, improve business performance, and drive growth.',
            'We have experienced resources in data analytics who can support you in data warehousing, data mining, predictive modeling, and data visualization. As part of this service, we will deploy a suite of software tools and technologies agreed with you, such as data warehouses, data mining tools, predictive analytics software, and data visualization software.',
            'By partnering with Cinergie Digital data analytics technology needs, you can access advanced tools and expertise, allowing them to extract maximum value from their data and make better business decisions.',
        ],
    },
    {
        id: 'softwaredevelopment',
        image: softwaredevelopment,
        title: 'Software Development',
        description: [
            'Through this service, we will create and develop software programs and applications to meet your specific needs and requirements.',
            'We specialize in technology services and have a team of skilled and experienced software developers who work to build custom software solutions that meet the unique needs of businesses, organizations, and individuals.',
            'These services can include web development, mobile application development, cloud computing, database management, and more. Based on your requirements, we will design the service to help automate processes, improve efficiency, or enable growth for your enterprise.',
            'In addition to the core software development, we also offer support and maintenance services to ensure that the software systems are running smoothly and efficiently over time.',
        ],
    },
    {
        id: 'maintenance',
        image: applicationmaintenance,
        title: 'Application Maintenance',
        description: [
            'Application maintenance is crucial for organizations to maintain the reliability and effectiveness of their software systems and to ensure they are able to meet the changing demands of the business.',
            'Our application maintenance service (AMS) will ensure the stability, performance, and security of your software applications. Cinergie Digital will provide regular maintenance, updating, and support of software applications.',
            'Our goal is to keep software applications running smoothly and efficiently over time, reducing downtime, fixing bugs and errors, and addressing security issues. The maintenance process can also include adding new features, improving existing ones, and making changes to the software to meet changing business needs and requirements.',
        ],
    },
    {
        id: 'team',
        image: teamasaservice,
        title: 'Teams as a Service',
        description: [
            'An autonomous group of software developers and engineers that is assigned exclusively to manage the software development, maintenance, and operations for you.',
            'By working with a dedicated development team, you access talent with the precise expertise needed to overcome challenges and meet your project’s demands. Our team provides a set of skills that your in-house team may lack or work jointly to attain your business goals.',
            'Our team works alongside your company staff to create and maintain software of the highest quality. The team works autonomously and provides status reports based on your requirements. The team relies on feedback and discoveries made during testing to shape its design and functions.',
            'By using Cinergie Digital resources, you can focus on key growth drivers while still being in control of the whole project. Teams are quickly spun up and managed by Cinergie Digital to implement and execute agreed plans.',
        ],
    },
    {
        id: 'augmentation',
        image: staffaugmentation,
        title: 'Resource Augmentation',
        description: [
            'Through this service, you get additional IT personnel to support the existing IT team of your organization. Cinergie Digital will provide your organization with the necessary resources and skills to meet its specific IT needs.',
            'IT resource augmentation is a cost-effective solution for organizations that need additional technical support but do not have the budget or resources to hire full-time employees. With this service, organizations can augment their IT team with skilled professionals who can work on specific projects or initiatives, helping to meet the organization’s IT goals and objectives.',
            'Cinergie Digital resource augmentation services can include software development, software maintenance, data engineering, data analytics, cloud computing, DevOps, and more. This service is a flexible and scalable solution that enables organizations to access the technical expertise they need when they need it, without the cost and commitment of hiring full-time employees.',
        ],
    },
];

const Services = () => {
    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                {services.map((service, index) => (
                    <Row id={service.id} key={index} className="align-items-center mb-6 pb-lg-5">
                        <Col
                            lg={6}
                            xs={12}
                            className={`order-1 order-md-${index % 2 === 0 ? 0 : 1}`}
                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-duration="1500">
                            <div className="mb-4 mb-lg-0">
                                <h1 className="display-4 fw-medium mb-3">{service.title}</h1>

                                {service.description.map((paragraph, i) => (
                                    <p key={i} className="mx-auto">{paragraph}</p>
                                ))}
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            xs={12}
                            className={`order-0 order-md-${index % 2 === 0 ? 1 : 0}`}
                            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                            data-aos-duration="1500">
                            <img src={service.image} alt={service.title} className="img-fluid d-flex mx-auto rounded" style={{ maxWidth: '70%' }} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default Services;
