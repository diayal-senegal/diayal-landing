import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const SimpleFooter = () => {
  return (
    <footer style={{
      background: '#232F3E',
      color: 'white',
      padding: '40px 20px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Logo et description */}
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/logo_diayal.svg" 
            alt="Logo Diayal" 
            style={{ height: '60px', marginBottom: '15px' }} 
          />
          <p style={{ 
            color: '#ccc', 
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto 15px'
          }}>
            La première marketplace 100% sénégalaise dédiée aux artisans locaux
          </p>
          <div style={{
            background: 'linear-gradient(45deg, #00A651, #FCD116, #E31E24)',
            padding: '5px 15px',
            borderRadius: '15px',
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: 'black',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
          }}>
            100% MADE IN SÉNÉGAL
          </div>
        </div>

        {/* Contact */}
        <div style={{ 
          marginBottom: '25px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          fontSize: '0.9rem',
          color: '#ccc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MdEmail />
            <span>info@diayal.sn</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MdPhone />
            <span>+(221) 77 1852967</span>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '15px', 
          marginBottom: '25px' 
        }}>
          {[
            { Icon: FaFacebookF, url: 'https://www.facebook.com/diayal.sn' },
            { Icon: FaInstagram, url: 'https://www.instagram.com/diayal.sn' },
            { Icon: FaTwitter, url: 'https://twitter.com/diayal_sn' },
            { Icon: FaTiktok, url: 'https://www.tiktok.com/' }
          ].map(({ Icon, url }, i) => (
            <a 
              key={i} 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'rgba(126, 171, 226, 0.2)',
                borderRadius: '50%',
                textDecoration: 'none',
                color: '#7eabe2',
                fontSize: '1.3rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#7eabe2';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(126, 171, 226, 0.2)';
                e.target.style.color = '#7eabe2';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #37475A',
          paddingTop: '20px',
          fontSize: '0.9rem',
          color: '#ccc'
        }}>
          <p style={{ marginBottom: '5px' }}>
            © 2025 Diayal – Tous droits réservés
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#7eabe2', 
            fontWeight: 'bold' 
          }}>
            ViSion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;