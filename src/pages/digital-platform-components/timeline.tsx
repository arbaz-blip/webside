import React from 'react';

export default function TimelineSection() {
  return (
    <div style={{
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Garet'
  
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '80px',
        color: '#1a1a1a'
      }}>
        Cinergie's Proven Approach
      </h2>

      <div style={{ position: 'relative', padding: '40px 0' }}>
        {/* Horizontal Timeline Bar */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          right: '5%',
          height: '8px',
          background: 'linear-gradient(to right, #4a4a4a 0%, #4a4a4a 33%, #bbb 33%, #bbb 66%, #ddd 66%, #ddd 100%)',
          transform: 'translateY(-50%)',
          borderRadius: '4px',
          zIndex: 1
        }} />

        {/* Timeline Items Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Stage 1 - Top */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#333'
              }}>
                1-2 Weeks
              </div>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#4a4a4a',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '600',
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                1
              </div>
            </div>
            
            {/* Connector Line */}
            <div style={{
              width: '2px',
              height: '60px',
              background: '#4a4a4a',
              margin: '0 auto 20px'
            }} />
            
            {/* Stage Info - Bottom */}
            <div style={{
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '8px',
                color: '#333'
              }}>
                STAGE
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#666',
                lineHeight: '1.5'
              }}>
                Roadmaps, audit, tech recommendations
              </div>
            </div>
          </div>

          {/* Stage 2 - Bottom */}
          <div style={{ textAlign: 'center' }}>
            {/* Stage Info - Top */}
            <div style={{
              padding: '20px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '8px',
                color: '#333'
              }}>
                STAGE
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#666',
                lineHeight: '1.5'
              }}>
                User flows, architecture, specs
              </div>
            </div>
            
            {/* Connector Line */}
            <div style={{
              width: '2px',
              height: '60px',
              background: '#666',
              margin: '0 auto 20px'
            }} />
            
            <div>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#666',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '600',
                margin: '0 auto 15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                2
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#333'
              }}>
                2-3 Weeks
              </div>
            </div>
          </div>

          {/* Stage 3 - Top */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#333'
              }}>
                6-10 Weeks
              </div>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#bbb',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '600',
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                3
              </div>
            </div>
            
            {/* Connector Line */}
            <div style={{
              width: '2px',
              height: '60px',
              background: '#bbb',
              margin: '0 auto 20px'
            }} />
            
            {/* Stage Info - Bottom */}
            <div style={{
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '8px',
                color: '#333'
              }}>
                STAGE
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#666',
                lineHeight: '1.5'
              }}>
                Go live, train, improve
              </div>
            </div>
          </div>

          {/* Stage 4 - Bottom */}
          <div style={{ textAlign: 'center' }}>
            {/* Stage Info - Top */}
            <div style={{
              padding: '20px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '8px',
                color: '#333'
              }}>
                STAGE
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#666',
                lineHeight: '1.5'
              }}>
                Build, integrate, test
              </div>
            </div>
            
            {/* Connector Line */}
            <div style={{
              width: '2px',
              height: '60px',
              background: '#ccc',
              margin: '0 auto 20px'
            }} />
            
            <div>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#ccc',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '600',
                margin: '0 auto 15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                4
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#333'
              }}>
                1-2 Weeks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
