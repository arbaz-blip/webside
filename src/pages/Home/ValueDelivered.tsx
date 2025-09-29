import React, { useState } from "react";
import "./ValueDelivered.css";
import bsfiImg from "../../assets/images/bsfi-data-migration-faster-lead-response.jpg.jpg";
import transportImg from "../../assets/images/transport-logistics-audit-compliance.jpg.jpg";
import healthcareImg from "../../assets/images/healthcare-ai-analytics-roi.jpg.jpg";
import enterpriseImg from "../../assets/images/enterprise-devops-faster-releases.jpg.jpg";
import retailImg from "../../assets/images/retail-ecommerce-go-live-10-weeks.jpg.jpg";

const categories = [
  "All",
  "BSFI",
  "T&L",
  "Healthcare",
  "Enterprise Delivery",
  "Retail & Ecommerce",
];

const caseStudies = [
  {
    category: "BSFI",
    title: "+45% Faster Lead Response",
    desc: "Customer 360 delivered in under 90 days with governed data integration.",
    img: bsfiImg,
    link: "/case-studies/bsfi",
  },
  {
    category: "T&L",
    title: "+90% Audit Compliance",
    desc: "ERP, CRM, and RPA enabled complete process transparency.",
    img: transportImg,
    link: "/case-studies/transport",
  },
  {
    category: "Healthcare",
    title: "3X Customer Value",
    desc: "AI-driven patient insights led to measurable ROI.",
    img: healthcareImg,
    link: "/case-studies/healthcare",
  },
  {
    category: "Enterprise Delivery",
    title: "2X Faster Releases",
    desc: "DevOps and QA automation accelerated software delivery.",
    img: enterpriseImg,
    link: "/case-studies/enterprise",
  },
  {
    category: "Retail & Ecommerce",
    title: "Go Live in 10 Weeks",
    desc: "ERP implementation delivered a rapid time-to-market.",
    img: retailImg,
    link: "/case-studies/retail",
  },
];

const ValueDelivered: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <section className="py-5 bg-blue">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-3">Value Delivered</h2>
        <p className="text-muted fs-5 mb-4">
          Real Client Success Stories in Aviation, Finance & Logistics
        </p>

        {/* Category Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn px-4 py-2 rounded-3 fw-semibold shadow-sm ${
                activeCategory === cat
                  ? "btn-dark text-white"
                  : "btn-outline-secondary bg-white"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="row g-0">
          {filteredStudies.map((study, idx) => (
            <div className="col-12 mb-4" key={idx}>
              <div
                className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative"
                style={{
                  backgroundImage: `url(${study.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "350px",
                  width: "100%",
                }}
              >
                <div
                  className="position-absolute bottom-0 w-100 p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                  }}
                >
                  <div
                    className={idx % 2 === 0 ? "text-start" : "text-end"}
                  >
                    <h3 className="fw-bold text-white mb-2">{study.title}</h3>
                    <p className="text-white-50 mb-3">{study.desc}</p>
                    <div>
                      <a
                        href={study.link}
                        className="btn btn-light btn-lg fw-semibold"
                      >
                        Read Story →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueDelivered;