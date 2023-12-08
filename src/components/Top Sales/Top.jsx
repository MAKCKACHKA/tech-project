import React from 'react';
import './style.css';
export default function Top({ children }) {
  return (
    <section className="sales-section">
      <h2 className="top-sales-title">Топ продажів</h2>
      {children}
    </section>
  );
}
