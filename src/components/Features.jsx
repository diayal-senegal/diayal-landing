import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'ARTISANAT SÉNÉGALAIS',
      items: ['Bijoux traditionnels', 'Maroquinerie', 'Textile bogolan', 'Poterie', 'Sculpture sur bois', 'Art décoratif'],
      bgColor: 'from-blue-50 to-blue-100',
      iconBg: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🇸🇳',
      title: '100% LOCAL',
      description: 'Plateforme développée au Sénégal par des développeurs sénégalais pour valoriser notre patrimoine culturel',
      badge: '🇸🇳 FIER',
      bgColor: 'from-green-50 to-green-100',
      iconBg: 'from-senegal-green to-green-600',
      highlight: true
    },
    {
      icon: '💰',
      title: 'REVENUS OPTIMISÉS',
      description: 'Gardez 95% de vos revenus avec les commissions les plus basses du marché sénégalais',
      stats: '95% pour vous, 5% commission',
      bgColor: 'from-yellow-50 to-yellow-100',
      iconBg: 'from-senegal-yellow to-yellow-600'
    }
  ];

  const benefits = [
    '✅ Première plateforme e-commerce 100% made in Sénégal',
    '✅ Exclusivement dédiée aux artisans et créateurs sénégalais',
    '✅ Interface en français et wolof',
    '✅ Paiements adaptés : Orange Money, Wave, Wari',
    '✅ Support technique local et réactif',
    '✅ Formation gratuite pour digitaliser votre activité',
    '✅ Promotion du patrimoine culturel sénégalais'
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🏺 SPÉCIALEMENT POUR LES ARTISANS SÉNÉGALAIS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Valorisons ensemble le génie créatif sénégalais sur la première marketplace 100% locale
          </p>
        </div>

        {/* Grille des fonctionnalités - Style de votre site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.bgColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${feature.highlight ? 'ring-2 ring-senegal-green' : ''}`}
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex-1'>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.iconBg} flex items-center justify-center shadow-lg mb-4`}>
                    <span className='text-2xl'>{feature.icon}</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-800 mb-3'>{feature.title}</h3>
                  
                  {feature.items && (
                    <ul className='space-y-1'>
                      {feature.items.map((item, idx) => (
                        <li key={idx} className='text-sm text-gray-700 flex items-center'>
                          <span className='text-diayal-green mr-2'>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {feature.description && (
                    <p className='text-gray-700 text-sm mb-3'>{feature.description}</p>
                  )}
                  
                  {feature.stats && (
                    <div className='bg-white bg-opacity-50 rounded-lg p-2 text-center'>
                      <span className='font-bold text-diayal-green'>{feature.stats}</span>
                    </div>
                  )}
                  
                  {feature.badge && (
                    <div className='senegal-gradient text-white px-3 py-1 rounded-full text-xs font-bold inline-block mt-2'>
                      {feature.badge}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Effet décoratif */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16'></div>
            </div>
          ))}
        </div>

        {/* Section avantages */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            🎯 POURQUOI DIAYAL POUR LES ARTISANS ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg mr-3">{benefit.split(' ')[0]}</span>
                <span className="text-gray-700">{benefit.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;