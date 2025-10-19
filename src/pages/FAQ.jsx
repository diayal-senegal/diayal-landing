import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que Diayal ?",
      answer: "Diayal est une plateforme qui met en relation des artisans locaux sénégalais et des acheteurs particuliers, au Sénégal et partout dans le monde. Nous ne vendons pas directement les produits : nous offrons un espace sécurisé pour que les artisans et les clients puissent échanger et commercer.",
      icon: "🏪"
    },
    {
      question: "Quels produits puis-je acheter sur Diayal ?",
      answer: "Tous les produits disponibles sont des produits artisanaux sénégalais authentiques, fabriqués localement par des artisans. Cela garantit qualité, authenticité et soutien à l'économie locale.",
      icon: "🎨"
    },
    {
      question: "Comment créer un compte ?",
      answer: "Il suffit de cliquer sur S'inscrire, de renseigner vos informations exactes (nom, email) et de créer un mot de passe. Vous pourrez ensuite acheter facilement.",
      icon: "👤"
    },
    {
      question: "Quels moyens de paiement sont disponibles ?",
      answer: "• Mobile Money (Orange Money, Wave, Free Money, etc.) via PayDunya ou CinetPay.\n• Cartes bancaires (Visa, Mastercard) via Stripe.\nTous les paiements passent par des solutions sécurisées.",
      icon: "💳"
    },
    {
      question: "Qui gère la livraison ?",
      answer: "La livraison est assurée directement par les artisans vendeurs. Chaque vendeur précise ses délais, ses frais et son mode de livraison.",
      icon: "📦"
    },
    {
      question: "Que faire si je veux retourner un produit ?",
      answer: "Vous disposez de 7 jours après réception pour changer d'avis (sauf pour les produits personnalisés, alimentaires ou périssables).\n• Le produit doit être retourné intact, non utilisé, complet avec tous ses accessoires dans son emballage d'origine.\n• L'acheteur est invité à vérifier l'état du colis à réception et à signaler immédiatement tout dommage au transporteur et au vendeur avant signature.\n• Les frais de retour sont à la charge de l'acheteur, sauf si le vendeur s'est trompé ou a livré un produit défectueux.",
      icon: "🔄"
    },
    {
      question: "Qui est responsable en cas de problème avec un produit ?",
      answer: "Chaque artisan vendeur est responsable de la qualité et de la conformité de ses produits. Diayal n'intervient pas directement dans la vente ou la livraison : notre rôle est de sécuriser les paiements et d'assurer la mise en relation.",
      icon: "⚖️"
    },
    {
      question: "Mes données personnelles sont-elles protégées ?",
      answer: "Oui ✅ Vos données sont utilisées uniquement pour gérer votre compte et vos commandes. Nous respectons des standards proches du RGPD pour garantir la confidentialité et la sécurité de vos informations.",
      icon: "🔒"
    },
    {
      question: "Que faire si j'ai un litige avec un vendeur ?",
      answer: "En cas de problème (retard, défaut, produit manquant), contactez d'abord le vendeur. Si le litige persiste, vous pouvez signaler le problème à Diayal afin que nous intervenions en médiation dans la mesure du possible.",
      icon: "🤝"
    },
    {
      question: "La plateforme est-elle disponible à l'international ?",
      answer: "Oui 🌍 Les artisans sénégalais peuvent vendre à des clients du monde entier. Les paiements par carte bancaire (Stripe) permettent aux acheteurs internationaux de commander facilement.",
      icon: "🌍"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%)', fontFamily: 'Inter, Arial, sans-serif' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '80px 16px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1))' }}></div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>❓</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 'bold', background: 'linear-gradient(to right, #2563eb, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '32px' }}>
            FAQ Acheteur
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#374151', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Questions fréquentes pour vous aider à mieux comprendre et utiliser Diayal.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* FAQ Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #dbeafe', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{ width: '100%', padding: '24px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#eff6ff'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '2rem', marginRight: '16px', flexShrink: 0 }}>{faq.icon}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', paddingRight: '16px', margin: 0 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <svg
                      style={{ width: '24px', height: '24px', color: '#2563eb', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div style={{ padding: '0 24px 24px' }}>
                    <div style={{ paddingLeft: '48px', paddingRight: '16px' }}>
                      <div style={{ background: '#eff6ff', borderRadius: '8px', padding: '16px' }}>
                        <p style={{ color: '#374151', lineHeight: '1.6', whiteSpace: 'pre-line', margin: 0 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div style={{ marginTop: '48px', background: 'linear-gradient(to right, #2563eb, #4f46e5)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p style={{ color: '#bfdbfe', marginBottom: '24px', fontSize: '1.1rem' }}>
              Notre équipe est là pour vous aider ! Contactez-nous et nous vous répondrons rapidement.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
              <a
                href="/contact"
                style={{ background: 'white', color: '#2563eb', padding: '12px 24px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'background-color 0.2s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#eff6ff'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              >
                <span style={{ marginRight: '8px' }}>📧</span>
                Nous contacter
              </a>
              <div style={{ display: 'flex', alignItems: 'center', color: '#bfdbfe' }}>
                <span style={{ marginRight: '8px' }}>📞</span>
                <span>+221 33 456 789</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;