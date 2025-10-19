import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'

const Privacy = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)', fontFamily: 'Inter, Arial, sans-serif' }}>
      <Header/>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '80px 16px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))' }}></div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🔒</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 'bold', background: 'linear-gradient(to right, #059669, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '32px' }}>
            Politique de Confidentialité
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#374151', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Nous protégeons vos données personnelles avec le plus grand soin
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section 1 - Introduction */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginBottom: '32px', border: '1px solid #d1fae5' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
              <span style={{ background: 'linear-gradient(to right, #059669, #10b981)', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '16px' }}>1</span>
              Introduction
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '16px' }}>
              La présente Politique de confidentialité décrit comment <span style={{ fontWeight: '600', color: '#059669' }}>Diayal</span> collecte, utilise, protège et partage les informations personnelles de ses utilisateurs lors de la navigation sur le site et lors de l'utilisation de nos services.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              En utilisant le site, vous acceptez la collecte et l'utilisation de vos données conformément à cette politique.
            </p>
          </div>

          {/* Section 2 - Données collectées */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginBottom: '32px', border: '1px solid #d1fae5' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
              <span style={{ background: 'linear-gradient(to right, #059669, #10b981)', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '16px' }}>2</span>
              Données collectées
            </h2>
            <p style={{ color: '#374151', marginBottom: '24px' }}>Nous pouvons collecter plusieurs types de données :</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '24px', border: '1px solid #bbf7d0' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#166534', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', marginRight: '8px' }}>👤</span>
                  Données utilisateur
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Nom, prénom</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Adresse email</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Adresse postale et téléphone</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem' }}>• Informations de paiement sécurisées</li>
                </ul>
              </div>
              
              <div style={{ background: '#ecfdf5', borderRadius: '12px', padding: '24px', border: '1px solid #a7f3d0' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#065f46', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', marginRight: '8px' }}>📊</span>
                  Données automatiques
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Adresse IP</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Données de navigation</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Pages consultées</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem' }}>• Cookies et traceurs</li>
                </ul>
              </div>
              
              <div style={{ background: '#f0fdfa', borderRadius: '12px', padding: '24px', border: '1px solid #99f6e4' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#134e4a', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', marginRight: '8px' }}>🏪</span>
                  Données vendeurs
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Nom boutique</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• Description</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>• NINEA</li>
                  <li style={{ color: '#374151', fontSize: '0.9rem' }}>• Coordonnées bancaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div style={{ background: 'linear-gradient(to right, #059669, #10b981)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center', marginTop: '48px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px' }}>
              Responsable du traitement
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', fontSize: '1.1rem' }}>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>📧 Email</h4>
                <p>contact@diayal.sn</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>📍 Adresse</h4>
                <p>129 Rue de la Paix<br/>Yoff, Dakar - Sénégal</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>📞 Téléphone</h4>
                <p>+221 33 456 789</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;