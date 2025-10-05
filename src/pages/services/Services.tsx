import React from "react";
import "./Services.css"; // Updated styles for layout and design

// Import images (replace with actual paths)
import advisoryImg from "../../assets/images/advisory-data-strategy-services.jpg";
import appDevImg from "../../assets/images/application-development-services.jpg";
import appModernImg from "../../assets/images/application-modernisation-maintenance.jpg";
import dataEngImg from "../../assets/images/data-engineering-analytics-services.jpg";
import aiImg from "../../assets/images/ai-automation-services.jpg";
import integrationImg from "../../assets/images/enterprise-integration-services.jpg";
import qaImg from "../../assets/images/qa-devops-services.jpg";
import managedImg from "../../assets/images/managed-it-services.jpg";
import teamsImg from "../../assets/images/teams-as-a-service.jpg";
import resourceImg from "../../assets/images/resource-augmentation-services.jpg";

const Services = () => {
  const services = [
    {
      title: "Advisory & Data Strategy",
      desc: [
        "Digital transformation & IT consulting",
        "Enterprise data strategy & governance",
        "Security, compliance & cost optimisation",
      ],
      img: advisoryImg,
      alt: "Advisory and enterprise data strategy IT services",
      badge: "95% STRATEGY SUCCESS",
    },
    {
      title: "Application Development",
      desc: [
        "Web & mobile app engineering",
        "API-first, cloud-native builds",
        "Agile, DevOps-enabled delivery",
      ],
      img: appDevImg,
      alt: "Enterprise application development and cloud-native builds",
      badge: "8-WEEK DELIVERY",
    },
    {
      title: "Application Modernisation & Maintenance",
      desc: [
        "Cloud migration & re-platforming",
        "API enablement & refactoring",
        "SLA-driven maintenance & performance optimisation",
      ],
      img: appModernImg,
      alt: "Application modernisation and legacy system migration",
      badge: "ZERO-DOWN MIGRATION",
    },
    {
      title: "Data Engineering & Analytics",
      desc: [
        "Data lake & warehouse design",
        "Real-time ETL/ELT pipelines",
        "BI dashboards, reporting & predictive analytics",
      ],
      img: dataEngImg,
      alt: "Data engineering and analytics services with ETL pipelines",
      badge: "90% DATA ACCURACY",
    },
    {
      title: "Artificial Intelligence & Automation",
      desc: [
        "Machine learning & MLOps",
        "RPA (bots & workflows)",
        "Finance operations automation",
      ],
      img: aiImg,
      alt: "Artificial intelligence and automation services for enterprises",
      badge: "80% AUTOMATION RATE",
    },
    {
      title: "Integration",
      desc: [
        "ERP & CRM integrations",
        "API gateway design & management",
        "Workflow automation across platforms",
      ],
      img: integrationImg,
      alt: "Enterprise IT integration services with ERP and API management",
      badge: "99% UPTIME",
    },
    {
      title: "QA & DevOps",
      desc: [
        "Test automation & CI/CD pipelines",
        "Observability dashboards & SLOs",
        "Rollback-ready pipelines & playbooks",
      ],
      img: qaImg,
      alt: "QA and DevOps services with CI/CD automation",
      badge: "100% TEST COVERAGE",
    },
    {
      title: "Managed Services",
      desc: [
        "24/7 monitoring & incident response",
        "FinOps & cost governance",
        "Continuous optimisation & reliability engineering",
      ],
      img: managedImg,
      alt: "Managed IT services with monitoring and cost governance",
      badge: "24/7 SUPPORT",
    },
    {
      title: "Teams as a Service",
      desc: [
        "Dedicated engineering pods",
        "Flexible onshore/offshore/hybrid models",
        "Integrated with client workflows",
      ],
      img: teamsImg,
      alt: "Teams as a Service embedded engineering pods",
      badge: "90% TEAM RETENTION",
    },
    {
      title: "Resource Augmentation",
      desc: [
        "On-demand staffing for niche skills",
        "Contract & long-term placements",
        "Enterprise-grade talent supply",
      ],
      img: resourceImg,
      alt: "Resource augmentation and IT talent staffing services",
      badge: "95% MATCH RATE",
    },
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>
      <section className="services-section">
        <div className="services-container">
          <h2>Enterprise IT & Digital Services That Deliver Measurable Outcomes</h2>
          <div className="services-grid">
            <div className="left-column">
              {services.slice(0, 5).map((service, index) => (
                <div key={index} className="service-card">
                  <div className="card-image">
                    <img src={service.img} alt={service.alt} />
                    <div className="metric-badge">{service.badge}</div>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="cta-link">Learn More →</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="right-column">
              {services.slice(5, 10).map((service, index) => (
                <div key={index + 5} className="service-card">
                  <div className="card-image">
                    <img src={service.img} alt={service.alt} />
                    <div className="metric-badge">{service.badge}</div>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="cta-link">Learn More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;