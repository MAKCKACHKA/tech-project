import React from 'react';
import './style.css';
export default function Video({ children }) {
  return (
    <section className="sales-section">
      <h2 className="top-sales-title">Наші відео та огляди</h2>
      {children}
    </section>
  );
}
