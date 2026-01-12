const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? 'https://inscription.diayal.sn/api' 
    : 'http://localhost:5000/api');

export const submitNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/landing-newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return response.ok;
  } catch (error) {
    console.error('Erreur newsletter:', error);
    return false;
  }
};

export const submitVendorTeaser = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/vendor-teaser/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    console.error('Erreur vendor teaser:', error);
    return false;
  }
};

export const submitContact = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    console.error('Erreur contact:', error);
    return false;
  }
};