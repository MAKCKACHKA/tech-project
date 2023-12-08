import React from 'react';

import './about.css';

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="icon-clock"
  >
    <path
      fill="#2e2f42"
      style={{ fill: 'var(--color1, #2e2f42)' }}
      d="M31.298 15.302c-0.002-8.453-6.856-15.304-15.309-15.302s-15.304 6.856-15.302 15.309c0.001 6.658 4.307 12.552 10.65 14.577 0.055 0.018 0.119 0.029 0.185 0.029 0.001 0 0.001 0 0.002 0h-0c0.126-0 0.245-0.035 0.346-0.095l-0.003 0.002c0.135-0.080 0.236-0.207 0.283-0.356l3.865-12.251c1.057-0.005 1.909-0.866 1.903-1.923s-0.866-1.909-1.923-1.903c-0.299 0.001-0.581 0.072-0.831 0.196l0.011-0.005-5.106-5.107c-0.253-0.245-0.657-0.238-0.902 0.016-0.239 0.247-0.239 0.639 0 0.886l5.104 5.109c-0.392 0.799-0.168 1.764 0.536 2.309l-3.683 11.674c-7.278-2.681-11.005-10.755-8.324-18.033s10.755-11.005 18.033-8.324c7.278 2.681 11.005 10.755 8.324 18.033-1.345 3.581-4.004 6.406-7.375 7.938l-0.088 0.036-0.398-1.874c-0.073-0.345-0.411-0.565-0.756-0.492-0.114 0.025-0.213 0.077-0.293 0.149l0.001-0.001-3.837 3.426c-0.263 0.234-0.287 0.637-0.052 0.9 0.076 0.085 0.174 0.149 0.283 0.184l4.899 1.564c0.335 0.108 0.694-0.077 0.802-0.412 0.019-0.058 0.031-0.126 0.031-0.195 0-0.047-0.005-0.092-0.015-0.136l0.001 0.004-0.391-1.839c5.665-2.388 9.343-7.943 9.329-14.090zM15.993 14.664c0.352 0 0.638 0.286 0.638 0.638s-0.286 0.638-0.638 0.638c-0.352 0-0.638-0.285-0.638-0.638s0.285-0.638 0.638-0.638zM18.094 29.529l2.184-1.948 0.603 2.84-2.787-0.892z"
    ></path>
    <path
      fill="#4d5ae5"
      style={{ fill: 'var(--color2, #4d5ae5)' }}
      d="M15.355 3.185v1.276c0 0.352 0.285 0.638 0.638 0.638s0.638-0.285 0.638-0.638v-1.276c0-0.352-0.286-0.638-0.638-0.638s-0.638 0.286-0.638 0.638zM3.876 14.664c-0.352 0-0.638 0.286-0.638 0.638s0.285 0.638 0.638 0.638h1.275c0.352 0 0.638-0.285 0.638-0.638s-0.285-0.638-0.638-0.638h-1.275zM28.11 15.94c0.352 0 0.638-0.285 0.638-0.638s-0.285-0.638-0.638-0.638h-1.275c-0.352 0-0.638 0.286-0.638 0.638s0.286 0.638 0.638 0.638h1.275z"
    ></path>
  </svg>
);

export default function About() {
  return (
    <section className="advantages-section">
      <div className="container advantages-container">
        <h2 className="visually-hidden">Advantages</h2>
        <ul className="advantages-list">
          <li className="advantages-item">
            <div className="advantages-icon-wrapper">
              <svg className="advantages-item-icon">
                <use href="../images/icons.svg#icon-antenna"></use>
              </svg>
            </div>
            <h3 className="advantages-item-title">Strategy</h3>
            <p className="advantages-item-text">
              Our goal is to identify the business problem to walk away with the
              perfect and creative solution.
            </p>
          </li>
          <li className="advantages-item">
            <div className="advantages-icon-wrapper">
              <div className="advantages-item-icon">
                <ClockIcon />
              </div>
            </div>
            <h3 className="advantages-item-title">Punctuality</h3>
            <p className="advantages-item-text">
              Bring the key message to the brand's audience for the best price
              within the shortest possible time.
            </p>
          </li>
          <li className="advantages-item">
            <div className="advantages-icon-wrapper">
              <svg className="advantages-item-icon">
                <use href="../images/icons.svg#icon-diagram"></use>
              </svg>
            </div>
            <h3 className="advantages-item-title">Diligence</h3>
            <p className="advantages-item-text">
              Research and confirm brands that present the strongest digital
              growth opportunities and minimize risk.
            </p>
          </li>
          <li className="advantages-item">
            <div className="advantages-icon-wrapper">
              <svg className="advantages-item-icon">
                <use href="../images/icons.svg#icon-astronaut"></use>
              </svg>
            </div>
            <h3 className="advantages-item-title">Technologies</h3>
            <p className="advantages-item-text">
              Design practice focused on digital experiences. We bring forth a
              deep passion for problem-solving.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
