
import React from 'react';

interface PersonalDetailsProps {
  isLoggedIn: boolean;
  user?: {
    name: string;
    email: string;
    mobile: string;
  };
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ isLoggedIn, user }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      
      <div style={{ marginBottom: '30px' }}>
        <img
          src="/src/assets/millie.png"     
          
          alt="millie"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '5px solid #8b5cf6',
            objectFit: 'cover',
            boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
            margin: '0 auto'
          }}
        />
      </div>

      <h1 style={{ fontSize: '30px', margin: '10px 0 8px' ,color : '#a855f7' }}>Hamidha fathima</h1>
      <p style={{ fontSize: '22px', color: '#a855f7', marginBottom: '25px' }}>
        Frontend Developer
      </p>

      <p style={{ 
        maxWidth: '700px', 
        margin: '0 auto 40px', 
        lineHeight: '1.7', 
        color: '#d1d5db',
        fontSize: '18px'
      }}>
        Passionate about coding and developing websites to emerging and established companies
      </p>

      
      {isLoggedIn && user && (
        <div style={{
          backgroundColor: '#1f2937',
          padding: '30px',
          borderRadius: '16px',
          maxWidth: '420px',
          margin: '0 auto',
          border: '1px solid #8b5cf6'
        }}>
          <h3 style={{ color: '#c084fc', marginBottom: '20px' }}>Personal Information</h3>
          <div style={{ textAlign: 'left', lineHeight: '2.0' }}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default PersonalDetails;