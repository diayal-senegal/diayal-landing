const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://diayal-backend.onrender.com/api' 
  : 'http://localhost:5000/api';

export const submitNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
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