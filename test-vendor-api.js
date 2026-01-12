// Script de test pour vérifier l'API des vendeurs
const API_URL = 'http://localhost:5000/api';

async function testVendorAPI() {
    console.log('🧪 Test de l\'API Vendor Teaser...\n');
    
    // Test 1: Inscription d'un vendeur
    console.log('1. Test d\'inscription d\'un vendeur...');
    try {
        const response = await fetch(`${API_URL}/vendor-teaser/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Artisan Test',
                email: `test-${Date.now()}@example.com`,
                phone: '+221123456789'
            })
        });
        
        const data = await response.json();
        console.log('✅ Inscription réussie:', data.message);
        console.log('📝 Vendeur créé:', data.vendor?.name);
    } catch (error) {
        console.error('❌ Erreur inscription:', error.message);
    }
    
    // Test 2: Récupération des statistiques
    console.log('\n2. Test des statistiques...');
    try {
        const response = await fetch(`${API_URL}/vendor-teaser/stats`);
        const stats = await response.json();
        console.log('✅ Statistiques récupérées:');
        console.log(`   - Total: ${stats.total}`);
        console.log(`   - Aujourd'hui: ${stats.today}`);
        console.log(`   - Cette semaine: ${stats.thisWeek}`);
    } catch (error) {
        console.error('❌ Erreur statistiques:', error.message);
    }
    
    // Test 3: Récupération de la liste
    console.log('\n3. Test de la liste des vendeurs...');
    try {
        const response = await fetch(`${API_URL}/vendor-teaser/list`);
        const data = await response.json();
        console.log(`✅ Liste récupérée: ${data.vendors?.length || 0} vendeurs`);
        if (data.vendors?.length > 0) {
            console.log('📋 Dernier vendeur inscrit:', data.vendors[0].name);
        }
    } catch (error) {
        console.error('❌ Erreur liste:', error.message);
    }
    
    console.log('\n🏁 Tests terminés !');
}

// Exécuter les tests
testVendorAPI().catch(console.error);