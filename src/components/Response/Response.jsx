import React from 'react';
import './style.css';
export default function Response({ children }) {
  return (
    <section className="sales-section">
      <h2 className="top-sales-title">Відгуки</h2>
      {children}
    </section>
  );
}
