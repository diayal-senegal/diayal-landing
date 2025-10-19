import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full mb-8">
      {/* Container principal avec hauteur fixe comme votre Banner */}
      <div className="relative w-full h-[390px] sm:h-[180px] md:h-[200px] lg:h-[220px] mt-6">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-left overflow-hidden cursor-pointer group gradient-bg"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Contenu en haut à gauche - Style exact de votre Banner */}
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-start gap-1 items-start h-full w-full text-white pt-6">
              
              {/* Badge 100% Made in Sénégal */}
              <div className="senegal-gradient px-4 py-2 rounded-full text-sm font-bold text-white mb-4 animate-pulse-slow">
                DIAYAL - 100% MADE IN SÉNÉGAL
              </div>
              
              {/* Titre principal */}
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-left mb-4">
                La première plateforme e-commerce moderne<br />
                exclusivement dédiée aux artisans sénégalais
              </h2>
              
              {/* Features */}
              <div className="flex flex-col sm:flex-row justify-start items-start gap-2 text-sm sm:text-base lg:text-lg mb-6">
                <div className="glass-effect px-3 py-1 rounded-full text-sm">
                  ✨ Valorisez votre savoir-faire traditionnel
                </div>
              </div>
              
              {/* Catégories d'artisanat */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="glass-effect px-3 py-1 rounded-full text-xs">🏺 Bijoux</span>
                <span className="glass-effect px-3 py-1 rounded-full text-xs">👜 Maroquinerie</span>
                <span className="glass-effect px-3 py-1 rounded-full text-xs">🧵 Textile</span>
                <span className="glass-effect px-3 py-1 rounded-full text-xs">🎨 Art</span>
                <span className="glass-effect px-3 py-1 rounded-full text-xs">🏠 Décoration</span>
              </div>
              
              {/* Paiements et livraison */}
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-2">
                  <span>💳</span>
                  <span>Paiements Orange Money & Wave</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span>Livraison dans tout le Sénégal</span>
                </div>
              </div>
              
              {/* Date de lancement */}
              <div className="mt-4">
                <div className="bg-diayal-orange px-4 py-2 rounded-full font-bold text-diayal-dark">
                   bientôt le lancement officiel !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;