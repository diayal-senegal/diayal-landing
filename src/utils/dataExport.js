// Utilitaire pour récupérer et exporter les données des formulaires

export const getSubscriptions = () => {
  return JSON.parse(localStorage.getItem('diayal_subscriptions') || '[]');
};

export const getVendors = () => {
  return JSON.parse(localStorage.getItem('diayal_vendors') || '[]');
};

export const exportToCSV = (data, filename) => {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const exportAllData = () => {
  const subscriptions = getSubscriptions();
  const vendors = getVendors();
  
  if (subscriptions.length > 0) {
    exportToCSV(subscriptions, 'diayal_subscriptions.csv');
  }
  
  if (vendors.length > 0) {
    exportToCSV(vendors, 'diayal_vendors.csv');
  }
  
  console.log('Inscriptions newsletter:', subscriptions);
  console.log('Vendeurs inscrits:', vendors);
};