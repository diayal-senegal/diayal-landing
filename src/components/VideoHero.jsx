import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Vidéo en background - Responsive */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster="/videos/diayal-poster.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 1
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Desktop/Tablet - Format 16:9 */}
        <source 
          src="/videos/diayal-teaser-desktop.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)" 
        />
        <source 
          src="/videos/diayal-teaser-desktop.webm" 
          type="video/webm" 
          media="(min-width: 768px)" 
        />
        
        {/* Mobile - Format 9:16 ou carré */}
        <source 
          src="/videos/diayal-teaser-mobile.mp4" 
          type="video/mp4" 
          media="(max-width: 767px)" 
        />
        <source 
          src="/videos/diayal-teaser-mobile.webm" 
          type="video/webm" 
          media="(max-width: 767px)" 
        />
        
        {/* Fallback universel */}
        <source src="/videos/diayal-teaser.mp4" type="video/mp4" />
        
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Overlay sombre */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 2
      }} />

      {/* Contrôles vidéo */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 15px',
        borderRadius: '25px',
        zIndex: 4
      }}>
        <button
          onClick={togglePlay}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          onClick={toggleMute}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            width: '80px',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Titre principal + textes */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '4px 4px 12px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.4)',
          background: 'linear-gradient(90deg, #00A651 0%, #FCD116 25%, #E31E24 50%, #00A651 75%, #FCD116 100%)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'titleGlow 3s ease-in-out infinite'
        }}>
          Diayal
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '30px',
          opacity: 0.95,
          lineHeight: '1.4',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}>
          La révolution e-commerce sénégalaise 
        </p>
        
        <div style={{
          background: '#FF9900',
          color: '#232F3E',
          padding: '15px 30px',
          borderRadius: '50px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          display: 'inline-block',
          marginBottom: '30px',
          boxShadow: '0 8px 25px rgba(255, 153, 0, 0.4)',
          animation: 'pulse 2s infinite'
        }}>
          Arrive bientôt...
        </div>

        <p style={{
          fontSize: '1.1rem',
          opacity: 0.9,
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}>
          Première marketplace 100% made in Sénégal
        </p>
      </div>

      {/* Indicateur de scroll */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        color: 'white',
        textAlign: 'center',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
          Découvrez plus
        </div>
        <div style={{ fontSize: '1.5rem' }}>
          ↓
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        @keyframes titleGlow {
          0% { 
            background-position: 0% 50%;
            transform: scale(1);
            filter: brightness(1) saturate(1.2);
          }
          25% {
            transform: scale(1.02);
            filter: brightness(1.1) saturate(1.4);
          }
          50% { 
            background-position: 100% 50%;
            transform: scale(1.05);
            filter: brightness(1.2) saturate(1.6);
          }
          75% {
            transform: scale(1.02);
            filter: brightness(1.1) saturate(1.4);
          }
          100% { 
            background-position: 0% 50%;
            transform: scale(1);
            filter: brightness(1) saturate(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default VideoHero;