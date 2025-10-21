import React, { useState } from "react";
import "./ValueDelivered.css";
import bfsiImg from "../../assets/images/bsfi-data-migration-faster-lead-response.jpg.png";
import transportImg from "../../assets/images/transport-logistics-audit-compliance.jpg.png";
import healthcareImg from "../../assets/images/healthcare-ai-analytics-roi.jpg.png";
import enterpriseImg from "../../assets/images/enterprise-devops-faster-releases.jpg.png";
import retailImg from "../../assets/images/retail-ecommerce-go-live-10-weeks.jpg.png";

const categories = [
  "All",
  "BFSI",
  "Transport & Logistics",
  "Healthcare",
  "Enterprise Delivery",
  "Retail & Ecommerce",
];

const caseStudies = [
    {
    category: "Transport & Logistics",
    title: "+90% Audit Compliance",
    desc: "Unified revenue recognition with ERP, CRM, and RPA for accurate, audit-ready operations.",
    img: transportImg,
    link: "/case-studies/transportlogistics",
  },
  {
    category: "BFSI",
    title: "+45% Faster Lead Response",
    desc: "Customer 360 delivered in under 90 days with governed data integration.",
    img: bfsiImg,
    link: "/case-studies/bfsi",
  },

  {
    category: "Healthcare",
    title: "3X Customer Value",
    desc: ["Modernized healthcare workflows with ", <br/>, "  scheduling and secure chat tools"],
    
    img: healthcareImg,
    link: "/case-studies/healthcare",
  },
  {
    category: "Enterprise Delivery",
    title: "2X Faster Releases",
    desc: "Dashboards, SLOs, and quality gates cut production issues by 70% and keep rollbacks safe.",
    img: enterpriseImg,
    link: "/case-studies/enterprisedelivery",
  },
  {
    category: "Retail & Ecommerce",
    title: "Go Live in 10 Weeks",
    desc: "Enterprise storefront with scalable catalogs, optimized checkout, and performance tuning.",
    img: retailImg,
    link: "/case-studies/retailecommerce",
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
        <h2 className="fw-bold mb-3">Value Delivered</h2>
        <p className="text-muted  mb-4">
          Real Client Success Stories in Aviation, Finance & Logistics
        </p>

        {/* Category Buttons */}
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

        {/* Case Studies */}
        <div className="row g-0">
          {filteredStudies.map((study, idx) => (
            <div className="col-12 mb-4" key={idx}>
              <div
                className="case-category-label position-relative overflow-hidden"
                style={{
                  backgroundImage: `url(${study.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "350px",
                }}
              >
                {/* Category name */}
                <div className="category-name-overlay">{study.category}</div>

                {/* Dark overlay for readability */}
                <div className="case-overlay"></div>

                {/* Text content */}
                <div
                  className={`case-content position-absolute bottom-0 w-100 p-4 ${
                    idx % 2 === 0 ? "text-start" : "text-end"
                  }`}
                >
                  <h3 className="fw-bold text-white mb-2 underline-heading">
                    {study.title}
                  </h3>
                  <p className="text-light mb-3">{study.desc}</p>
                  <a href={study.link} className="read-story-box-button">
                    Read Story →
                  </a>
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