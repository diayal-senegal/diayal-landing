import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      background: '#232F3E',
      color: 'white',
      padding: '60px 20px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <img src="/images/logo_diayalf.svg" alt="Logo Diayal" style={{ height: '90px', marginBottom: '0px' }} />
            <p style={{ marginBottom: '10px', color: '#ccc', lineHeight: '1.6' }}>
              La première marketplace 100% sénégalaise dédiée aux artisans locaux. Valorisons ensemble notre patrimoine.
            </p>
            <div style={{
              background: 'linear-gradient(45deg, #00A651, #FCD116, #E31E24)',
              padding: '8px 15px',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
             MADE IN SÉNÉGAL
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#7eabe2', marginBottom: '15px' }}>Liens utiles</h4>
            <div style={{ color: '#ccc', fontSize: '0.9rem' }}>
              <p style={{ marginBottom: '8px' }}><a href="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Politique de confidentialité</a></p>
              <p style={{ marginBottom: '8px' }}><a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a></p>
              <p style={{ marginBottom: '8px' }}><a href="/faq" style={{ color: '#ccc', textDecoration: 'none' }}>FAQ</a></p>
              {/* <p><a href="/vendor" style={{ color: '#ccc', textDecoration: 'none' }}>Devenir artisan partenaire</a></p> */}
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#7eabe2', marginBottom: '15px' }}>Contact</h4>
            <div style={{ color: '#ccc', fontSize: '0.9rem' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>🏛️ Dakar, Sénégal</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><MdEmail /> contact@diayal.sn</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MdPhone /> +(221) 773385468</p>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#7eabe2', marginBottom: '15px' }}>Suivez-nous</h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {[FaFacebookF, FaInstagram, FaTwitter, FaTiktok].map((Icon, i) => (
                <a key={i} href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(126, 171, 226, 0.2)',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  color: '#7eabe2',
                  fontSize: '1.2rem',
                  transition: 'background 0.3s ease'
                }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #37475A',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#7eabe2', fontWeight: 'bold', marginBottom: '10px' }}>
            ViSion
          </p>
          <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
            © 2025 Diayal – Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;