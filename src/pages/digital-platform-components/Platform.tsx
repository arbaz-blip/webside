import React from 'react';


export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const iconStyle = (index: number) => ({
    width: '48px',
    height: '48px',
    flexShrink: 0,
    transform: hoveredIndex === index ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
    transition: 'transform 0.3s ease'
  });

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section className='values-section'>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '300', 
          marginBottom: '10px',
          color: '#1a1a1a'
        }}>
          Our Values
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          marginBottom: '50px',
          fontWeight: '300'
        }}>
          The principles that guide everything we build and deliver
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {/* Outcomes First */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(0)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Outcomes First
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Measured in ROI, not tasks closed.
              </p>
            </div>
          </div>

          {/* Transparency Always */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Transparency Always
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Open sprints, clear docs, audit trails.
              </p>
            </div>
          </div>

          {/* Security by Default */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(2)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Security by Default
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Encryption and access controls everywhere.
              </p>
            </div>
          </div>

          {/* Build for Change */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(3)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Build for Change
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Modular, maintainable, scalable architecture.
              </p>
            </div>
          </div>

          {/* One Team Mindset */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(4)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                One Team Mindset
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Embedded pods with shared accountability.
              </p>
            </div>
          </div>

          {/* Responsible AI */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(5)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Responsible AI
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Fairness checks and explainable AI models.
              </p>
            </div>
          </div>

          {/* Operational Excellence */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(6)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(6)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Operational Excellence
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                SLOs, on-call, and continuous improvement.
              </p>
            </div>
          </div>

          {/* Stewardship of Spend */}
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              padding: '25px',
              borderBottom: '2px solid #333',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(7)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle(7)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ width: '100%', height: '100%' }}>
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                Stewardship of Spend
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#666', 
                lineHeight: '1.6',
                margin: 0
              }}>
                FinOps discipline, predictable costs, clear ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}