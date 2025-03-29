import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  // Blue color palette
  const colors = {
    sidebarBg: '#f0f8ff',      // AliceBlue background
    sidebarHover: '#e1f0ff',   // Lighter blue for hover
    activeBg: '#d4e6ff',       // Light blue for active item
    activeBorder: '#1e90ff',   // DodgerBlue accent
    text: '#2c3e50',           // Dark blue-gray text
    textActive: '#1e3a8a',     // Darker blue for active text
    accent: '#1e90ff',         // DodgerBlue for headings
  };

  // Styles for the sidebar
  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: colors.sidebarBg,
    padding: '20px',
    position: 'fixed',
    left: 0,
    top: 0,
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: colors.accent,
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${colors.activeBg}`,
  };

  const navStyle = {
    display: 'flex',
    width: '100%',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
  };

  const liStyle = {
    padding: '15px 15px',
    transition: 'all 0.3s ease',
    width: '100%',
    marginBottom: '5px',
    borderRadius: '4px',
    ':hover': {
      backgroundColor: colors.sidebarHover,
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: colors.text,
    fontWeight: '600',
    display: 'block',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  const activeStyle = {
    backgroundColor: colors.activeBg,
    color: colors.textActive,
    fontWeight: 'bold',
    borderLeft: `4px solid ${colors.activeBorder}`,
    paddingLeft: '11px', // Compensate for border
  };

  // Styles for the main content area
  const contentStyle = {
    marginLeft: '250px',
    padding: '40px',
    backgroundColor: '#ffffff',
    minHeight: '100vh'
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.accent
  };

  const subheadingStyle = {
    fontSize: '18px',
    color: colors.text,
    marginBottom: '20px',
    lineHeight: '1.6',
    opacity: 0.8
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <div style={sidebarStyle}>
        <div style={logoStyle}>TrackTidy Grocery</div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            {['/', '/shop', '/contact'].map((path, index) => (
              <li key={index} style={liStyle}>
                <NavLink
                  to={path}
                  style={({ isActive }) => 
                    isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                  }
                >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
     
    </div>
    
  );
};

export default AppHeader;