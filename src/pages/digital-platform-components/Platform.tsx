
import React from 'react';
import "./styles.css";

const ValuesAndTimeline = () => {
    return (
        <div className="container">
            {/* Our Values and Foundation */}
            <section className="values-section">
                <h2>Our Values and Foundation</h2>
                <p>Transparent sprints, secure engineering, measurable ROI</p>
             </section>

            <section className='values-section'>
              <div className="icon-grid">
      <div className="icon-box"><div className="icon">✔</div><p><strong>Outcomes First</strong><br />Measured in ROI, not tasks closed.</p></div>
      <div className="icon-box"><div className="icon">☀</div><p><strong>Transparency Always</strong><br />Open sprints, clear docs, audit trails.</p></div>
      <div className="icon-box"><div className="icon">🛡</div><p><strong>Security by Default</strong><br />Encryption and access controls everywhere.</p></div>
      <div className="icon-box"><div className="icon">⇅</div><p><strong>Build for Change</strong><br />Modular, maintainable, scalable architecture.</p></div>
      <div className="icon-box"><div className="icon">🔗</div><p><strong>One Team Mindset</strong><br />Embedded pods with shared accountability.</p></div>
      <div className="icon-box"><div className="icon"></div><p><strong>Responsible AI</strong><br />Fairness checks and explainable AI models.</p></div>
      <div className="icon-box"><div className="icon">↻</div><p><strong>Operational Excellence</strong><br />SLO <br />s, on-call, and continuous improvement.</p></div>
      <div className="icon-box"><div className="icon">⬆</div><p><strong>Stewardship of Spend</strong><br />FinOps discipline, predictable costs, clear ROI.</p></div>
    </div>
                          </section>


                          
  <div className="timeline-section">
    <h2>Cinergie’s Proven Approach</h2>
    <div className="timeline-top">
      <div className="timeline-step"><div className="duration">1–2 Weeks</div><div className="circle step1">1</div></div>
      <div className="timeline-step"><div className="duration">2–3 Weeks</div><div className="circle step2">2</div></div>
      <div className="timeline-step"><div className="duration">6–10 Weeks</div><div className="circle step3">3</div></div>
      <div className="timeline-step"><div className="duration">1–2 Weeks</div><div className="circle step4">4</div></div>
    </div>
    <div className="timeline-bar"></div>
    <div className="timeline-bottom">
      <div className="stage"><div className="stage-title">Stage & Discovery</div><div className="stage-desc">Roadmaps, audits, and tailored tech recommendations.</div></div>
      <div className="stage"><div className="stage-title">Design & Architecture</div><div className="stage-desc">User flows, specs, and scalable architecture blueprints.</div></div>
      <div className="stage"><div className="stage-title">Development & Integration</div><div className="stage-desc">Iterative builds, seamless integrations, rigorous testing.</div></div>
      <div className="stage"><div className="stage-title">Deploy & Optimize</div><div className="stage-desc">Smooth go-live, team training, and performance improvements.</div></div>
    </div>
  </div>
  </div>
  
            
            
    );
};

export default ValuesAndTimeline;
