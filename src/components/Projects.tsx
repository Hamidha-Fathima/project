
import React from 'react';

const projects = [
  { title: "Orphic", type: "Frontend and backend", desc: "App used to by orphans and orphanages to store and register their data", tech: [ "NetBeans","GlassFish server"] },
  { title: "Alana", type: "Frontend and Backend", desc: "A wedding planning website used for easy booking through the online services.", tech: ["vs code", "PhpMyAdmin","HTML","CSS","JavaScript"] },
  { title: "Amusement park DataBase", type: "Backend", desc: "A database designed to store multiple categories of amusement park such as rides,stalls and so on", tech: ["PostgreSQL"] },
  { title: "Flight Booking System", type: "Backend", desc: "The basics of how multiple customers can book a ticket on a flight.", tech: ["C language"] },
  { title: "Railway Reservation system", type: "Backend", desc: "Reserving train tickets and checking PNR status", tech: ["Python", "MySql"] },
  { title: "notification wireframes", type: "Frontend", desc: "The UX of notifications on an iphone 16.", tech: ["Figma"] },
];

const Projects: React.FC = () => {
  return (
    <div style={{ marginBottom: '80px' }}>
      <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '30px',color: '#6b21a8'}}>Projects</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '25px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: '#1f2937',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #4b5563'
          }}>
            <span style={{
              backgroundColor: '#6b21a8',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '14px'
            }}>
              {project.type}
            </span>

            <h3 style={{ fontSize: '22px', margin: '20px 0 12px' }}>{project.title}</h3>
            <p style={{ color: '#d1d5db', lineHeight: '1.5' }}>{project.desc}</p>

            <div style={{ margin: '20px 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  backgroundColor: '#374151',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '13px'
                }}>
                  {t}
                </span>
              ))}
            </div>

        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;