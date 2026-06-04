// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import PostsPage from './components/PostsPage';

interface User {
  name: string;
  email: string;
  mobile: string;
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      const confirmSwitch = window.confirm("Are you sure you want to switch pages?");
      if (confirmSwitch) {
        navigate(path);
      }
    }
  };

  return (
    <nav style={{
      backgroundColor: '#1a1a2e',
      padding: '16px 40px',
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      borderBottom: '1px solid #4b5563'
    }}>
      <a href="#" onClick={() => handleNavigation('/')} style={{ color: location.pathname === '/' ? '#a855f7' : '#d1d5db', textDecoration: 'none', fontSize: '18px', cursor: 'pointer' }}>
        Home
      </a>
      <a href="#" onClick={() => handleNavigation('/posts')} style={{ color: location.pathname === '/posts' ? '#a855f7' : '#d1d5db', textDecoration: 'none', fontSize: '18px', cursor: 'pointer' }}>
        Posts
      </a>
    </nav>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', mobile: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.mobile) {
      setLoginError("Email and Mobile Number are required");
      return;
    }

    const loggedInUser: User = {
      name: "Alex Johnson",
      email: loginData.email,
      mobile: loginData.mobile,
    };

    setUser(loggedInUser);
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setLoginError('');
    setLoginData({ email: '', mobile: '' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router basename="/project">   {/* ← This is the key fix */}
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', color: 'white' }}>
        <Header 
          isLoggedIn={isLoggedIn} 
          onLoginClick={() => setShowLoginModal(true)} 
        />

        <Navigation />

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <PersonalDetails isLoggedIn={isLoggedIn} user={user || undefined} />
                <Skills />
                <Projects />
                <ContactForm />
              </>
            } />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </main>

        {/* Login Modal */}
        {showLoginModal && (
          <div style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
          }}>
            <div style={{ backgroundColor: '#1f2937', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '420px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Login</h2>
              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9ca3af' }}>Email Address</label>
                  <input
                    type="email" placeholder="your@email.com" value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    style={{ width: '100%', padding: '14px', backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white' }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9ca3af' }}>Mobile Number</label>
                  <input
                    type="tel" placeholder="+91 98765 43210" value={loginData.mobile}
                    onChange={(e) => setLoginData({ ...loginData, mobile: e.target.value })}
                    style={{ width: '100%', padding: '14px', backgroundColor: '#111827', border: '1px solid #4b5563', borderRadius: '8px', color: 'white' }}
                  />
                </div>

                {loginError && <p style={{ color: 'red', textAlign: 'center' }}>{loginError}</p>}

                <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#8b5cf6', border: 'none', borderRadius: '8px', color: 'white', fontSize: '18px' }}>
                  Login
                </button>
              </form>
            </div>
          </div>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} style={{ position: 'fixed', bottom: '30px', right: '30px', padding: '12px 24px', backgroundColor: '#ef4444', border: 'none', borderRadius: '50px' }}>
            Logout
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;