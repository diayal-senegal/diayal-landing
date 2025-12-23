const SibApiV3Sdk = require('sib-api-v3-sdk');
const fs = require('fs');
const path = require('path');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

// URL du logo hébergé
const LOGO_URL = `${process.env.SERVER_URL || 'https://api.diayal.sn'}/public/images/logo.png`;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Email de confirmation d'inscription
const sendWelcomeEmail = async (userEmail, userName, userType) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = '🎉 Bienvenue sur Diayal !';
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenue sur Diayal</title>
            <style>
                @media only screen and (max-width: 600px) {
                    .container { width: 100% !important; padding: 10px !important; }
                    .header { padding: 20px 15px !important; }
                    .content { padding: 20px 15px !important; }
                    .logo { width: 80px !important; height: 80px !important; }
                    .title { font-size: 22px !important; }
                    .button { padding: 12px 20px !important; font-size: 14px !important; }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img class="logo" src="${LOGO_URL}" alt="Diayal" width="120" height="120" style="display: block; margin: 0 auto;" />
                    </div>
                    <h1 class="title" style="margin: 0; font-size: 28px; font-weight: 300;">Bienvenue ${userName} ! 🎉</h1>
                </div>
                <div class="content" style="padding: 40px 30px; background: white;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px;">Votre compte <strong style="color: #667eea;">${userType === 'customer' ? 'client' : userType === 'vendeur' ? 'vendeur' : userType}</strong> a été créé avec succès sur Diayal.</p>
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">Vous pouvez maintenant vous connecter et commencer à utiliser notre plateforme.</p>
                    <div style="text-align: center; margin: 35px 0;">
                        <a class="button" href="${userType === 'customer' ? process.env.CLIENT_URL + '/dashboard' : process.env.DASHBOARD_URL}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">${userType === 'customer' ? 'Accéder à mon compte' : 'Accéder au tableau de bord'}</a>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
                        <p style="color: #888; font-size: 14px; text-align: center; margin: 0;">Merci de nous faire confiance ! 💙</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    sendSmtpEmail.sender = { name: 'Diayal', email: process.env.BREVO_SENDER_EMAIL };
    sendSmtpEmail.to = [{ email: userEmail, name: userName }];
    
    try {
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('✅ Réponse Brevo:', result.response?.statusCode, result.response?.statusMessage);
        console.log('📧 Email envoyé vers:', userEmail);
    } catch (error) {
        console.error('❌ Erreur Brevo:', error.response?.body || error.message);
    }
};

// Email de réinitialisation de mot de passe
const sendPasswordResetEmail = async (userEmail, userName, resetToken) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = '🔐 Réinitialisation de votre mot de passe';
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Réinitialisation mot de passe</title>
            <style>
                @media only screen and (max-width: 600px) {
                    .container { width: 100% !important; padding: 10px !important; }
                    .header { padding: 20px 15px !important; }
                    .content { padding: 20px 15px !important; }
                    .logo { width: 80px !important; height: 80px !important; }
                    .title { font-size: 20px !important; }
                    .button { padding: 12px 20px !important; font-size: 14px !important; }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div class="header" style="background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); padding: 30px; text-align: center; color: white;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img class="logo" src="${LOGO_URL}" alt="Diayal" width="120" height="120" style="display: block; margin: 0 auto;" />
                    </div>
                    <h1 class="title" style="margin: 0; font-size: 24px; font-weight: 300;">🔐 Réinitialisation de mot de passe</h1>
                </div>
                <div class="content" style="padding: 40px 30px; background: white;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px;">Bonjour <strong style="color: #dc3545;">${userName}</strong>,</p>
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">Vous avez demandé la réinitialisation de votre mot de passe.</p>
                    <div style="text-align: center; margin: 35px 0;">
                        <a class="button" href="${process.env.DASHBOARD_URL}/reset-password/${resetToken}" style="background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);">Réinitialiser mon mot de passe</a>
                    </div>
                    <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 20px 0;">
                        <p style="color: #856404; font-size: 14px; margin: 0; text-align: center;">⚠️ Ce lien expire dans 30 minutes</p>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
                        <p style="color: #888; font-size: 14px; text-align: center; margin: 0;">Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    sendSmtpEmail.sender = { name: 'Diayal', email: process.env.BREVO_SENDER_EMAIL };
    sendSmtpEmail.to = [{ email: userEmail, name: userName }];
    
    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (error) {
        console.error('Erreur envoi email reset:', error);
    }
};

// Email de confirmation de commande
const sendOrderConfirmationEmail = async (customerEmail, customerName, orderId, orderTotal) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = `✅ Commande confirmée #${orderId}`;
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Commande confirmée</title>
            <style>
                @media only screen and (max-width: 600px) {
                    .container { width: 100% !important; padding: 10px !important; }
                    .header { padding: 20px 15px !important; }
                    .content { padding: 20px 15px !important; }
                    .logo { width: 80px !important; height: 80px !important; }
                    .title { font-size: 20px !important; }
                    .button { padding: 12px 20px !important; font-size: 14px !important; }
                    .order-card { padding: 15px !important; }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div class="header" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 30px; text-align: center; color: white;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img class="logo" src="${LOGO_URL}" alt="Diayal" width="120" height="120" style="display: block; margin: 0 auto;" />
                    </div>
                    <h1 class="title" style="margin: 0; font-size: 24px; font-weight: 300;">✅ Commande confirmée !</h1>
                </div>
                <div class="content" style="padding: 40px 30px; background: white;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 20px;">Bonjour <strong style="color: #28a745;">${customerName}</strong>,</p>
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">Votre commande a été confirmée avec succès !</p>
                    <div class="order-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #28a745; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <p style="margin: 0; font-size: 18px; color: #333; font-weight: 600;">Commande #${orderId}</p>
                        <p style="margin: 15px 0 0 0; font-size: 24px; color: #28a745; font-weight: bold;">${orderTotal} FCFA</p>
                    </div>
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">📦 Vous recevrez un email de suivi dès l'expédition.</p>
                    <div style="text-align: center; margin: 35px 0;">
                        <a class="button" href="${process.env.CLIENT_URL}/orders" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);">Suivre ma commande</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    sendSmtpEmail.sender = { name: 'Diayal', email: process.env.BREVO_SENDER_EMAIL };
    sendSmtpEmail.to = [{ email: customerEmail, name: customerName }];
    
    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (error) {
        console.error('Erreur envoi email commande:', error);
    }
};

// Email de changement de statut de commande
const sendOrderStatusEmail = async (customerEmail, customerName, orderId, newStatus) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    const statusMessages = {
        'processing': { text: 'en cours de traitement', icon: '⏳', color: '#ffc107', gradient: 'linear-gradient(135deg, #ffc107 0%, #ffca2c 100%)' },
        'shipped': { text: 'expédiée', icon: '🚚', color: '#17a2b8', gradient: 'linear-gradient(135deg, #17a2b8 0%, #20c997 100%)' },
        'delivered': { text: 'livrée', icon: '✅', color: '#28a745', gradient: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' },
        'cancelled': { text: 'annulée', icon: '❌', color: '#dc3545', gradient: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)' }
    };
    
    const status = statusMessages[newStatus] || { text: newStatus, icon: '📦', color: '#6c757d', gradient: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)' };
    
    sendSmtpEmail.subject = `${status.icon} Commande #${orderId} ${status.text}`;
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mise à jour commande</title>
            <style>
                @media only screen and (max-width: 600px) {
                    .container { width: 100% !important; padding: 10px !important; }
                    .header { padding: 20px 15px !important; }
                    .content { padding: 20px 15px !important; }
                    .logo { width: 80px !important; height: 80px !important; }
                    .title { font-size: 20px !important; }
                    .button { padding: 12px 20px !important; font-size: 14px !important; }
                    .status-card { padding: 15px !important; }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div class="header" style="background: ${status.gradient}; padding: 30px; text-align: center; color: white;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img class="logo" src="${LOGO_URL}" alt="Diayal" width="120" height="120" style="display: block; margin: 0 auto;" />
                    </div>
                    <h1 class="title" style="margin: 0; font-size: 24px; font-weight: 300;">${status.icon} Mise à jour de commande</h1>
                </div>
                <div class="content" style="padding: 40px 30px; background: white;">
                    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">Bonjour <strong style="color: ${status.color};">${customerName}</strong>,</p>
                    <div class="status-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid ${status.color}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <p style="margin: 0; font-size: 16px; color: #333; font-weight: 600;">Commande #${orderId}</p>
                        <p style="margin: 15px 0 0 0; font-size: 20px; color: ${status.color}; font-weight: bold;">${status.icon} ${status.text.toUpperCase()}</p>
                    </div>
                    <div style="text-align: center; margin: 35px 0;">
                        <a class="button" href="${process.env.CLIENT_URL}/orders" style="background: ${status.gradient}; color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(${status.color.replace('#', '')}, 0.3);">Voir ma commande</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    sendSmtpEmail.sender = { name: 'Diayal', email: process.env.BREVO_SENDER_EMAIL };
    sendSmtpEmail.to = [{ email: customerEmail, name: customerName }];
    
    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (error) {
        console.error('Erreur envoi email statut:', error);
    }
};

// NOUVELLE FONCTION : Email de bienvenue pour la landing page
const sendLandingWelcomeEmail = async (userEmail) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = 'Bienvenue sur Diayal ! 🙏';
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenue sur Diayal</title>
            <style>
                @media only screen and (max-width: 600px) {
                    .container { width: 100% !important; padding: 10px !important; }
                    .content { padding: 20px 15px !important; }
                    .logo { width: 80px !important; height: 80px !important; }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);">
                    <img class="logo" src="${LOGO_URL}" alt="Diayal" width="120" height="120" style="display: block; margin: 0 auto 20px;" />
                </div>
                <div class="content" style="padding: 40px 30px; background: white; line-height: 1.6;">
                    <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Bonjour,</h1>
                    
                    <p style="color: #333; margin-bottom: 20px;">Merci de vous être inscrit(e) sur <strong>Diayal</strong> 🙏</p>
                    
                    <p style="color: #333; margin-bottom: 20px;">Diayal est une plateforme e-commerce en cours de lancement, pensée pour <strong>mettre en lumière les artisans sénégalais</strong> et faciliter la vente de créations artisanales en ligne, ici et ailleurs.</p>
                    
                    <p style="color: #333; margin-bottom: 20px;">Votre inscription compte beaucoup pour nous.<br>
                    Elle montre qu'il existe une vraie envie de voir l'artisanat évoluer, gagner en visibilité et en opportunités.</p>
                    
                    <h3 style="color: #FF6B35; font-size: 20px; margin: 30px 0 15px 0;">Et maintenant, concrètement ?</h3>
                    
                    <p style="color: #333; margin-bottom: 15px;">Que vous soyez <strong>artisan(e)</strong> ou simplement <strong>curieux(se)</strong>, vous êtes au bon endroit :</p>
                    
                    <ul style="color: #333; margin-bottom: 25px; padding-left: 20px;">
                        <li style="margin-bottom: 10px;"><strong>Si vous êtes artisan(e)</strong>, nous vous contacterons prochainement pour vous expliquer comment présenter vos créations et rejoindre la plateforme, simplement et sans engagement.</li>
                        <li><strong>Si vous êtes ici par curiosité ou par passion pour l'artisanat</strong>, vous ferez partie des premières personnes informées lors de l'ouverture et de la mise en ligne des premières créations.</li>
                    </ul>
                    
                    <h3 style="color: #FF6B35; font-size: 20px; margin: 30px 0 15px 0;">Ce qui arrive prochainement</h3>
                    
                    <ul style="color: #333; margin-bottom: 25px; padding-left: 20px;">
                        <li style="margin-bottom: 8px;">L'ouverture progressive de la plateforme</li>
                        <li style="margin-bottom: 8px;">L'intégration des premiers artisans et de leurs produits</li>
                        <li style="margin-bottom: 8px;">Des outils simples pour vendre, acheter et suivre les commandes</li>
                        <li>Une approche humaine, transparente et respectueuse du travail artisanal</li>
                    </ul>
                    
                    <p style="color: #333; margin-bottom: 20px;">👉 Vous serez informé(e) en priorité des prochaines étapes du projet.</p>
                    
                    <p style="color: #333; margin-bottom: 15px;">En attendant, vous pouvez :</p>
                    <ul style="color: #333; margin-bottom: 30px; padding-left: 20px;">
                        <li style="margin-bottom: 8px;">Revenir sur la page de teaser 👉 <strong><a href="http://www.diayal.sn" style="color: #FF6B35; text-decoration: none;">www.diayal.sn</a></strong></li>
                        <li>Répondre directement à cet email si vous avez une question ou une idée à partager</li>
                    </ul>
                    
                    <p style="color: #333; margin-bottom: 20px;">Merci de faire partie de l'aventure dès le début.<br>
                    Le plus beau reste à construire.</p>
                    
                    <p style="color: #333; margin-bottom: 10px;">À très bientôt,</p>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #333; margin-bottom: 5px; font-weight: bold;">Oumar</p>
                        <p style="color: #666; margin-bottom: 5px; font-size: 14px;">Fondateur de Diayal</p>
                        <p style="color: #666; margin: 0; font-size: 14px;">Plateforme dédiée à l'artisanat sénégalais</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    sendSmtpEmail.sender = { name: 'Diayal', email: process.env.BREVO_SENDER_EMAIL };
    sendSmtpEmail.to = [{ email: userEmail }];
    
    try {
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('✅ Email landing envoyé vers:', userEmail);
    } catch (error) {
        console.error('❌ Erreur email landing:', error.response?.body || error.message);
    }
};

module.exports = {
    sendWelcomeEmail,
    sendPasswordResetEmail,
    sendOrderConfirmationEmail,
    sendOrderStatusEmail,
    sendLandingWelcomeEmail  // NOUVELLE FONCTION AJOUTÉE
};