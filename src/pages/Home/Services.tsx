import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { HashLink } from 'react-router-hash-link';
import datastrategy from '../../assets/images/services/DataStrategy.webp';
import dataengineering from '../../assets/images/services/DataEngineering.webp';
import dataanalytics from '../../assets/images/services/DataAnalytics.webp';
import softwaredevelopment from '../../assets/images/services/SoftwareDevelopment.webp';
import applicationmaintenance from '../../assets/images/services/ApplicationMaintenance.webp';
import teamasaservice from '../../assets/images/services/TeamsAsAService.webp';
import staffaugmentation from '../../assets/images/services/ResourceAugmentation.webp';

const Services = () => {
    const [hoveredService, setHoveredService] = useState('datastrategy');

    const handleServiceHover = (service: string) => {
        setHoveredService(service);
    };

    const getServiceImage = () => {
        switch (hoveredService) {
            case 'dataengineering':
                return dataengineering;
            case 'dataanalytics':
                return dataanalytics;
            case 'softwaredevelopment':
                return softwaredevelopment;
            case 'maintenance':
                return applicationmaintenance;
            case 'team':
                return teamasaservice;
            case 'augmentation':
                return staffaugmentation;
            default:
                return datastrategy;
        }
    };

    return (
        <section id="services" className="position-relative overflow-hidden py-6 features-3">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col className="text-center">
                        <h1 className="hero-title fw-semibold">Our Tech Services</h1>
                        <p className="text-muted mx-auto">
                            We deliver information technology services that enable to modernize operations and drive
                            innovation across all areas of your enterprise. Some of the key areas covered by our service
                            are:
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="bar-chart-2" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#datastrategy'}
                                    onMouseEnter={() => handleServiceHover('datastrategy')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Data Strategy and Governance
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="cpu" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#dataengineering'}
                                    onMouseEnter={() => handleServiceHover('dataengineering')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Data Engineering
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="aperture" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#analytics'}
                                    onMouseEnter={() => handleServiceHover('dataanalytics')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Data Analytics
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="code" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#softwaredevelopment'}
                                    onMouseEnter={() => handleServiceHover('softwaredevelopment')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Software Development
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="tool" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#maintenance'}
                                    onMouseEnter={() => handleServiceHover('maintenance')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Application Maintenance
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="users" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#team'}
                                    onMouseEnter={() => handleServiceHover('team')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Teams as a Service
                                </HashLink>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="user-plus" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <HashLink
                                    to={'/services#augmentation'}
                                    onMouseEnter={() => handleServiceHover('augmentation')}
                                    className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Resource Augmentation
                                </HashLink>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={getServiceImage()}
                            alt="desktop1"
                            className="img-fluid d-flex mx-auto rounded"
                            style={{
                                maxWidth: '70%',
                            }}
                            data-aos="fade-left"
                            data-aos-duration="700"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
