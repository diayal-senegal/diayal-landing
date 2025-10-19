import React, { useState, useEffect } from 'react';
import { getSubscriptions, getVendors, exportAllData } from '../utils/dataExport';

const AdminPanel = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    setSubscriptions(getSubscriptions());
    setVendors(getVendors());
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#232F3E', marginBottom: '30px' }}>Panel Admin Diayal</h1>
      
      <button 
        onClick={exportAllData}
        style={{
          background: '#FF9900',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '30px'
        }}
      >
        📥 Exporter toutes les données
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Inscriptions Newsletter */}
        <div>
          <h2 style={{ color: '#7eabe2' }}>Inscriptions Newsletter ({subscriptions.length})</h2>
          <div style={{ maxHeight: '400px', overflow: 'auto', border: '1px solid #ddd', borderRadius: '5px' }}>
            {subscriptions.map((sub, i) => (
              <div key={i} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <strong>{sub.email}</strong><br />
                <small>{new Date(sub.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>

        {/* Vendeurs inscrits */}
        <div>
          <h2 style={{ color: '#7eabe2' }}>Vendeurs inscrits ({vendors.length})</h2>
          <div style={{ maxHeight: '400px', overflow: 'auto', border: '1px solid #ddd', borderRadius: '5px' }}>
            {vendors.map((vendor, i) => (
              <div key={i} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <strong>{vendor.name}</strong><br />
                <span>{vendor.email}</span><br />
                <span>{vendor.phone}</span><br />
                <small>{new Date(vendor.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;