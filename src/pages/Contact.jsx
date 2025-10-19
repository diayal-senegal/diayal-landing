import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { submitContact } from '../services/api'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            // Sauvegarde localStorage (toujours)
            const contacts = JSON.parse(localStorage.getItem('diayal_contacts') || '[]')
            const newContact = {
                ...formData,
                timestamp: new Date().toISOString(),
                id: Date.now()
            }
            contacts.push(newContact)
            localStorage.setItem('diayal_contacts', JSON.stringify(contacts))
            
            // Envoi vers API (silencieux si échec)
            await submitContact(formData)
            
            setMessage('Message envoyé avec succès !')
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setMessage(''), 5000)
        } catch (error) {
            console.error('Erreur contact:', error)
            setMessage('Erreur lors de l\'envoi')
            setTimeout(() => setMessage(''), 5000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
            <Header />
            <div style={{ background: '#f1f5f9', padding: '64px 0' }}>
                <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', color: '#1e293b' }}>Nous contacter</h1>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                            {/* Informations de contact */}
                            <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px', color: '#1e293b' }}>Nos coordonnées</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div>
                                        <h3 style={{ fontWeight: '600', color: '#1e293b' }}>Adresse</h3>
                                        <p style={{ color: '#64748b' }}>129 Rue de la Paix - 12000 - Yoff<br/>Dakar (Sénégal)</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: '600', color: '#1e293b' }}>Téléphone</h3>
                                        <p style={{ color: '#64748b' }}>+221 33 456 789</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: '600', color: '#1e293b' }}>Email</h3>
                                        <p style={{ color: '#64748b' }}>contact@diayal.sn</p>
                                    </div>
                                </div>
                            </div>

                            {/* Formulaire de contact */}
                            <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px', color: '#1e293b' }}>Envoyez-nous un message</h2>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Votre nom"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                            onFocus={(e) => e.target.style.borderColor = '#059473'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Votre email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                            onFocus={(e) => e.target.style.borderColor = '#059473'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Sujet"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                            onFocus={(e) => e.target.style.borderColor = '#059473'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Votre message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                                            onFocus={(e) => e.target.style.borderColor = '#059473'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{ 
                                            width: '100%', 
                                            background: loading ? '#9ca3af' : 'linear-gradient(to right, #059473, #04b383)', 
                                            color: 'white', 
                                            padding: '12px', 
                                            borderRadius: '6px', 
                                            fontWeight: '600', 
                                            border: 'none',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            transition: 'opacity 0.2s'
                                        }}
                                        onMouseOver={(e) => !loading && (e.target.style.opacity = '0.9')}
                                        onMouseOut={(e) => !loading && (e.target.style.opacity = '1')}
                                    >
                                        {loading ? 'Envoi...' : 'Envoyer le message'}
                                    </button>
                                    {message && (
                                        <p style={{ textAlign: 'center', color: message.includes('succès') ? '#059669' : '#dc2626', fontWeight: '500' }}>
                                            {message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact