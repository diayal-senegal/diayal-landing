import React, { useState } from 'react';
import Header from './components/Header';
import VideoHero from './components/VideoHero';
import Newsletter from './components/Newsletter';
import SimpleFooter from './components/SimpleFooter';
import { submitVendorTeaser } from './services/api';

function App() {
  const [vendorData, setVendorData] = useState({ name: '', email: '', phone: '' });
  const [vendorMessage, setVendorMessage] = useState('');



  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', lineHeight: '1.6' }}>
      <Header />
      
      {/* 1. Hero Section avec Vidéo */}
      <VideoHero />

      {/* 2. Section Inscription Vendeurs */}
      <section style={{
        background: 'linear-gradient(135deg, #232F3E 0%, #7eabe2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            lineHeight: '1.3'
          }}>
            Si vous êtes artisan couturier, menuisier, cordonnier (maroquinier), bijoutier, sculpteur, artiste peintre, potier ou vannier
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            color: '#FF9900',
            fontWeight: 'bold'
          }}>
            Inscrivez-vous rapidement pour faire partie des premiers à vendre vos produits en ligne sur la première plateforme e-commerce moderne dédiée exclusivement aux artisans du Sénégal, avec votre propre boutique virtuelle et une interface de gestion des clients, de vos stocks et l'évolution de vos gains
          </p>
          
          <form onSubmit={async (e) => {
            e.preventDefault();
            const vendor = {
              ...vendorData,
              timestamp: new Date().toISOString(),
              id: Date.now()
            };
            
            // Sauvegarde localStorage (toujours)
            const existing = JSON.parse(localStorage.getItem('diayal_vendors') || '[]');
            existing.push(vendor);
            localStorage.setItem('diayal_vendors', JSON.stringify(existing));
            
            // Envoi vers API (silencieux si échec)
            await submitVendorTeaser(vendorData);
            
            setVendorMessage('🎉 Inscription réussie ! Nous vous contacterons bientôt.');
            setVendorData({ name: '', email: '', phone: '' });
            setTimeout(() => setVendorMessage(''), 4000);
          }} style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Nom complet"
                value={vendorData.name}
                onChange={(e) => setVendorData({...vendorData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                placeholder="Adresse email"
                value={vendorData.email}
                onChange={(e) => setVendorData({...vendorData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '30px' }}>
              <input
                type="tel"
                placeholder="Numéro de téléphone (+221...)"
                value={vendorData.phone}
                onChange={(e) => setVendorData({...vendorData, phone: e.target.value})}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                required
              />
            </div>
            
            <button
              type="submit"
              style={{
                background: '#FF9900',
                color: '#232F3E',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 8px 25px rgba(255, 153, 0, 0.4)'
              }}
            >
               JE M'INSCRIS COMME VENDEUR
            </button>
          </form>
          
          {vendorMessage && (
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid #22c55e',
              color: '#22c55e',
              padding: '15px',
              borderRadius: '10px',
              marginTop: '20px'
            }}>
              {vendorMessage}
            </div>
          )}
        </div>
      </section>

      {/* 3. Section Newsletter Artisans */}
      <Newsletter />

      {/* 4. Footer Simplifié */}
      <SimpleFooter />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 2rem !important; }
          h2 { font-size: 2rem !important; }
          .hero-section { padding: 60px 20px !important; }
        }
        
        button:hover {
          transform: translateY(-2px);
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

export default App;