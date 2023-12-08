import Form from 'components/Form Data/Form';
import Shoping from 'components/Shoping/Shoping';
import { useState } from 'react';

export default function Buy() {
  const [sum, setSum] = useState(0);

  return (
    <>
      <h1 className="main-title">Покупки</h1>
      <section className="buy-section">
        <Shoping sum={sum} setSum={setSum} />
        <Form sum={sum} />
      </section>
    </>
  );
}
