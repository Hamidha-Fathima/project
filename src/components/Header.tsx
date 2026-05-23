
import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick }) => {
  return (
    <header style={{
      backgroundColor: '#1a1a2e',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #4b5563'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '28px', color: '#a855f7', fontWeight: 'bold' }}>#</span>
        <h1 style={{ fontSize: '28px', margin: 0, color: 'white' }}>MyPortfolio</h1>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        
        
        {!isLoggedIn ? (
          <button
            onClick={onLoginClick}
            style={{
              padding: '12px 28px',
              backgroundColor: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        ) : (
          <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓ Logged In</span>
        )}
      </nav>
    </header>
  );
};

export default Header;