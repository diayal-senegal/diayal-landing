import React, { useState } from 'react';
import { submitNewsletter } from '../services/api';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert('Veuillez entrer votre email');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Veuillez entrer un email valide');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulation de l'envoi
      await simulateEmailSubmission(email);
      setIsSubmitted(true);
      setEmail('');
      
      // Masquer le message après 4 secondes
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const simulateEmailSubmission = async (email) => {
    // Sauvegarder localement (toujours)
    const emails = JSON.parse(localStorage.getItem('landingEmails') || '[]');
    const newEntry = {
      email: email,
      timestamp: new Date().toISOString(),
      domain: window.location.hostname,
      type: 'artisan'
    };
    
    emails.push(newEntry);
    localStorage.setItem('landingEmails', JSON.stringify(emails));
    
    // Envoi vers API (silencieux si échec)
    await submitNewsletter(email);
    
    console.log('Email artisan inscrit:', newEntry);
  };

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/nav-bg.png')`,
        minHeight: '100vh'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Titre principal */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez le mouvement !
          </h2>
          {/* <p className="text-xl text-diayal-black mb-2">
            Soyez les premiers sur la plateforme !
          </p> */}
          <p className="text-white opacity-90">
            Inscrivez-vous pour être notifié du lancement officiel
          </p>
        </div>

        {/* Formulaire d'inscription - Responsive */}
        <div className="mb-12">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            
            {/* Version mobile - Stack vertical */}
            <div className="sm:hidden space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Taper votre email"
                className="w-full px-6 py-4 text-gray-700 focus:outline-none text-lg rounded-lg shadow-xl"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-diayal-orange hover:bg-orange-600 px-8 py-4 text-white font-bold text-lg transition-colors disabled:opacity-50 rounded-lg shadow-xl"
              >
                {isLoading ? '...' : 'REJOINDRE'}
              </button>
            </div>

            {/* Version desktop - Horizontal */}
            <div className="hidden sm:flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Taper votre email"
                className="flex-1 px-6 py-4 text-gray-700 focus:outline-none text-lg rounded-lg shadow-xl"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-diayal-orange hover:bg-orange-600 px-8 py-4 text-white font-bold text-lg transition-colors disabled:opacity-50 rounded-lg shadow-xl whitespace-nowrap"
              >
                {isLoading ? '...' : 'REJOINDRE'}
              </button>
            </div>
          </form>
          
          {/* <p className="text-diayal-black text-sm mt-3">
            Pas de spam, promis ! Seulement les informations importantes.
          </p> */}
        </div>

        {/* Avantages pionniers */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold text-diayal-orange mb-6">
            Avantages exclusifs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl mb-2">🆓</div>
              <h4 className="font-semibold text-white mb-2">Inscription gratuite</h4>
              <p className="text-diayal-black text-sm">Pour les artisans </p>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-semibold text-white mb-2">Formation personnalisée</h4>
              <p className="text-diayal-black text-sm">Accompagnement pour digitaliser votre activité</p>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-semibold text-white mb-2">Mise en avant de vos créations</h4>
              <p className="text-diayal-black text-sm">Vos créations s'ouvrent au monde</p>
            </div>
            
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl mb-2">🗣️</div>
              <h4 className="font-semibold text-white mb-2">Support dédié</h4>
              <p className="text-diayal-black text-sm">En français et wolof, 7j/7</p>
            </div>
          </div>
        </div>

        {/* Compteur d'inscrits */}
        {/* <div className="mt-8 text-center">
          <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2">
            <span className="text-white font-semibold">
              🔥 Déjà {Math.floor(Math.random() * 50) + 33}+ artisans inscrits !
            </span>
          </div>
        </div> */}
      </div>

      {/* Message de succès */}
      {isSubmitted && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
          ✅ Merci ! Vous serez notifié du lancement.
        </div>
      )}
    </section>
  );
};

export default Newsletter;