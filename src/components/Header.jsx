import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{
      background: 'white',
      color: 'white',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ color: 'black', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
              <MdEmail />
              <span>info@diayal.sn</span><div></div>
              <MdPhone />
              <span>+(221) 77 1852967</span>
            </div>
             
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF9900' }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <img src="/images/logo_diayal.svg" alt="Logo Diayal" style={{ height: '90px', marginBottom: '0px' }} />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            
           
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/diayal.sn" style={{ color: 'blue', textDecoration: 'none', fontSize: '1.2rem' }}><FaFacebookF /></a>
              <a href="https://www.instagram.com/diayal.sn" style={{ color: 'red', textDecoration: 'none', fontSize: '1.2rem' }}><FaInstagram /></a>
              <a href="https://twitter.com/diayal_sn" style={{ color: 'lightblue', textDecoration: 'none', fontSize: '1.2rem' }}><FaTwitter /></a>
              <a href="https://www.tiktok.com/" style={{ color: 'black', textDecoration: 'none', fontSize: '1.2rem' }}><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;