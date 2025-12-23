// Exemple d'endpoint à ajouter dans votre backend
// (routes/landing.js ou dans votre fichier de routes principal)

const { sendLandingWelcomeEmail } = require('./path/to/your/emailService');

// Endpoint spécifique pour la landing page
app.post('/api/landing-newsletter', async (req, res) => {
    const { email } = req.body;
    
    try {
        // Validation de l'email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Email invalide' });
        }
        
        // Sauvegarder l'email en base de données (optionnel)
        // await saveSubscriber({
        //     email,
        //     source: 'landing-page',
        //     type: 'pre-launch',
        //     createdAt: new Date()
        // });
        
        // Envoyer l'email de bienvenue automatiquement
        await sendLandingWelcomeEmail(email);
        
        res.json({ 
            success: true, 
            message: 'Inscription réussie et email envoyé' 
        });
        
    } catch (error) {
        console.error('Erreur landing newsletter:', error);
        res.status(500).json({ 
            error: 'Erreur serveur',
            details: error.message 
        });
    }
});

module.exports = app;