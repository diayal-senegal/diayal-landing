import React from 'react';

const SimpleHeader = () => {
  return (
    <header style={{ 
      backgroundColor: '#7eabe2', 
      color: 'white', 
      padding: '20px',
      textAlign: 'center'
    }}>
       <img src="/images/logo_diayalf.svg" alt="Logo Diayal" style={{ height: '90px', marginBottom: '0px' }} />
      <p style={{ margin: '10px 0 0 0' }}>Marketplace 100% Sénégalaise</p>
    </header>
  );
};

export default SimpleHeader;