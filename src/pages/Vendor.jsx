import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Vendor = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fef3c7 100%)', fontFamily: 'Inter, Arial, sans-serif' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '80px 16px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(234, 88, 12, 0.1), rgba(245, 158, 11, 0.1))' }}></div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🏪</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 'bold', background: 'linear-gradient(to right, #ea580c, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '32px' }}>
            Devenir Vendeur
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#374151', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 32px' }}>
            Vous êtes artisan sénégalais ? Rejoignez Diayal et vendez vos créations authentiques à des milliers de clients au Sénégal et dans le monde entier.
          </p>
          <a
            href="/register"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(to right, #ea580c, #f59e0b)', color: 'white', padding: '16px 32px', borderRadius: '50px', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)' }}
            onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)' }}
          >
            <span style={{ marginRight: '8px' }}>🚀</span>
            Créer mon compte vendeur
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
              Pourquoi vendre sur Diayal ?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
            
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #fed7aa', transition: 'all 0.3s ease' }}
                 onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)' }}
                 onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)' }}>
              <div style={{ background: 'linear-gradient(to right, #fed7aa, #fde68a)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', margin: '0 auto 16px' }}>
                <span style={{ fontSize: '2rem' }}>🌍</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '12px', textAlign: 'center' }}>Audience Internationale</h3>
              <p style={{ color: '#6b7280', textAlign: 'center', lineHeight: '1.6' }}>
                Accédez à une large audience nationale et internationale. Vendez vos produits artisanaux au-delà des frontières.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #fed7aa', transition: 'all 0.3s ease' }}
                 onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)' }}
                 onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)' }}>
              <div style={{ background: 'linear-gradient(to right, #dbeafe, #bfdbfe)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', margin: '0 auto 16px' }}>
                <span style={{ fontSize: '2rem' }}>📦</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '12px', textAlign: 'center' }}>Gestion Simplifiée</h3>
              <p style={{ color: '#6b7280', textAlign: 'center', lineHeight: '1.6' }}>
                Outils de gestion de stock et commandes simples et efficaces. Interface intuitive pour gérer votre boutique.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #fed7aa', transition: 'all 0.3s ease' }}
                 onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)' }}
                 onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)' }}>
              <div style={{ background: 'linear-gradient(to right, #d1fae5, #a7f3d0)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', margin: '0 auto 16px' }}>
                <span style={{ fontSize: '2rem' }}>💰</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '12px', textAlign: 'center' }}>Paiements Sécurisés</h3>
              <p style={{ color: '#6b7280', textAlign: 'center', lineHeight: '1.6' }}>
                Recevez vos paiements rapidement via cartes bancaires et Mobile Money. Transactions 100% sécurisées.
              </p>
            </div>

          </div>

          {/* How it works */}
          <div style={{ background: 'linear-gradient(to right, #ea580c, #f59e0b)', borderRadius: '16px', padding: '32px', color: 'white', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center' }}>
              Comment ça marche ?
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ fontSize: '2rem' }}>1️⃣</span>
                </div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Inscription</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Créez votre compte vendeur gratuitement</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ fontSize: '2rem' }}>2️⃣</span>
                </div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Configuration</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Configurez votre boutique et ajoutez vos produits</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ fontSize: '2rem' }}>3️⃣</span>
                </div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Vente</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Recevez des commandes et gérez vos ventes</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ fontSize: '2rem' }}>4️⃣</span>
                </div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Paiement</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>Recevez vos paiements rapidement</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, #fef3c7, #fed7aa)', borderRadius: '16px', padding: '32px', border: '1px solid #fbbf24' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
                Prêt à commencer ?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#374151', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Rejoignez notre communauté d'artisans sénégalais et donnez une nouvelle dimension à votre activité. 
                L'inscription est gratuite et ne prend que quelques minutes.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                <a
                  href="/register"
                  style={{ background: 'linear-gradient(to right, #ea580c, #f59e0b)', color: 'white', padding: '16px 32px', borderRadius: '50px', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)' }}
                  onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)' }}
                >
                  <span style={{ marginRight: '8px' }}>🚀</span>
                  Créer mon compte vendeur
                </a>
                
                <a
                  href="/contact"
                  style={{ background: 'white', color: '#ea580c', border: '2px solid #ea580c', padding: '16px 32px', borderRadius: '50px', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#fff7ed'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <span style={{ marginRight: '8px' }}>💬</span>
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Vendor;