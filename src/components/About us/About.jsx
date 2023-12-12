import React from 'react';

import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.h1}>Liberty Car Rental</h1>
        <p className={styles.p}>
          Convenience, Freedom, and Confidence in Every Journey!
        </p>
      </div>

      <section className={styles.section}>
        <p className={styles.p}>
          Looking for the perfect way to unlock new possibilities for your
          travels? Liberty Car Rental - your key to boundless freedom and
          comfort on the road!
        </p>
        {/* Add other elements and text as needed */}

        <p className={styles.p}>
          Choose US - choose the freedom to travel without unnecessary
          constraints and worries! With us, every journey is a celebration of
          your victories. Make your choice today and feel the difference!
        </p>
      </section>
    </div>
  );
}
