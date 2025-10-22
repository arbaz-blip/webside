// timeline.tsx
import React from 'react';

export default function TimelineSection({ isMobile = false }) {
  if (!isMobile) {
    return (
      <div style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'Garet',
       
      
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '80px',
          color: '#1a1a1a',
          fontFamily: 'Garet'
            
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
            background: 'linear-gradient(to right, #0784a3 0%, #0784a3 33%, #3FAAD9 33%, #bbb 66%, #ddd 66%, #ddd 100%)',
            transform: 'translateY(-50%)',
            borderRadius: '4px',
            zIndex: 0,
               fontFamily: 'Garet'
          }} />

          {/* Timeline Items Container */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            position: 'relative',
            zIndex: 0,
            fontFamily: 'Garet'
          }}>
            {/* Stage 1 - Top */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  1-2 Weeks
                </div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: '#0784a3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: '0 auto',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  fontFamily: 'Garet'
                }}>
                  1
                </div>
              </div>
              
              {/* Connector Line */}
              <div style={{
                width: '2px',
                height: '60px',
                background: '#3FAAD9',
                margin: '0 auto 20px',
                fontFamily: 'Garet'
              }} />
              
              {/* Stage Info - Bottom */}
              <div style={{
                padding: '20px',
                textAlign: 'center',
                fontFamily: 'Garet'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  STAGE
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: 'Garet'
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
                marginBottom: '20px',
                fontFamily: 'Garet'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  STAGE
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: 'Garet'
                }}>
                  User flows, architecture, specs
                </div>
              </div>
              
              {/* Connector Line */}
              <div style={{
                width: '2px',
                height: '60px',
                background: '#3FAAD9',
                margin: '0 auto 20px',
                fontFamily: 'Garet'
              }} />
              
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: '#0784a3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: '0 auto 15px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  fontFamily: 'Garet'
                }}>
                  2
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  2-3 Weeks
                </div>
              </div>
            </div>

            {/* Stage 3 - Top */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  6-10 Weeks
                </div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: '#3FAAD9',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: '0 auto',
                  boxShadow: '0 4px 6px #0784a3',
                  fontFamily: 'Garet'
                }}>
                  3
                </div>
              </div>
              
              {/* Connector Line */}
              <div style={{
                width: '2px',
                height: '60px',
                background: '#0784a3',
                margin: '0 auto 20px',
                fontFamily: 'Garet'
              }} />
              
              {/* Stage Info - Bottom */}
              <div style={{
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  STAGE
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: 'Garet'
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
                marginBottom: '20px',
                fontFamily: 'Garet'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  color: '#333',
                  fontFamily: 'Garet'
                }}>
                  STAGE
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: 'Garet'
                }}>
                  Build, integrate, test
                </div>
              </div>
              
              {/* Connector Line */}
              <div style={{
                width: '2px',
                height: '60px',
                background: '#0784a3',
                margin: '0 auto 20px',
                fontFamily: 'Garet'
              }} />
              
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: '#3FAAD9',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: '0 auto 15px',
                  boxShadow: '0 4px 6px #3FAAD9',
                  fontFamily: 'Garet'
                }}>
                  4
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#333',
                  fontFamily: 'Garet'
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

  // Mobile vertical timeline
  const stages = [
    { time: '1-2 Weeks', desc: 'Roadmaps, audit, tech recommendations', bg: '#0784a3', shadow: 'rgba(7,132,163,0.3)' },
    { time: '2-3 Weeks', desc: 'User flows, architecture, specs', bg: '#0784a3', shadow: 'rgba(7,132,163,0.3)' },
    { time: '6-10 Weeks', desc: 'Go live, train, improve', bg: '#3FAAD9', shadow: 'rgba(63,170,217,0.3)' },
    { time: '1-2 Weeks', desc: 'Build, integrate, test', bg: '#3FAAD9', shadow: 'rgba(63,170,217,0.3)' }
  ];

  return (
    <div style={{
      padding: '40px 15px',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Garet',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '60px',
        color: '#1a1a1a',
        fontFamily: 'Garet'
      }}>
        Cinergie's Proven Approach
      </h2>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '60px', 
        position: 'relative',
        alignItems: 'center'
      }}>
        {/* Vertical Timeline Bar */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(to bottom, #0784a3 0%, #0784a3 50%, #3FAAD9 50%, #3FAAD9 100%)',
          transform: 'translateX(-50%)',
          zIndex: 0,
          borderRadius: '2px',
          fontFamily: 'Garet'
        }} />

        {stages.map((stage, index) => (
          <div 
            key={index} 
            style={{ 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              zIndex: 1,
              width: '100%'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: stage.bg,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '20px',
              boxShadow: `0 4px 6px ${stage.shadow}`,
              fontFamily: 'Garet'
            }}>
              {index + 1}
            </div>
            <div style={{ 
              textAlign: 'center', 
              maxWidth: '400px',
              padding: '0 10px',
              fontFamily: 'Garet'
            }}>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#333',
                fontFamily: 'Garet'
              }}>
                {stage.time}
              </div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '8px',
                color: '#333',
                fontFamily: 'Garet'
              }}>
                STAGE
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.5',
                fontFamily: 'Garet'
              }}>
                {stage.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}