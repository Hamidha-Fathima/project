
import React from 'react';


const skills = [
  { name: "React node", level: 70, category: "FRONTEND" },
  { name: "JavaScript", level: 95, category: "FRONTEND" },
  { name: "CSS", level: 88, category: "FRONTEND" },
  { name: "operating system", level: 80, category: "FRONTEND AND BACKEND" },
  { name: "Python", level: 92, category: "PROGRAMMING LANGUAGE" },
  { name: "PhpMyAdmin", level: 70, category: "DATABASE" },
  { name: "C language", level: 95, category: "PROGRAMMING LANGUAGE" },
  { name: "Data structures and algorithms", level: 80, category: "LOGIC" },
];

const Skills: React.FC = () => {
  return (
    
    <div style={{ marginBottom: '80px' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '40px',color: '#a855f7' }}>Skills</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            backgroundColor: '#1f2937',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #4b5563'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong>{skill.name}</strong>
              <span style={{ color: '#a855f7' }}>{skill.level}%</span>
            </div>
            
            <div style={{
              height: '10px',
              backgroundColor: '#374151',
              borderRadius: '9999px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${skill.level}%`,
                height: '100%',
                backgroundColor: '#a855f7',
                transition: 'width 1s ease'
              }} />
            </div>
            
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#9ca3af' }}>
              {skill.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;