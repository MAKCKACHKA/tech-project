// import Form from 'components/Form Data/Form';
// import Shoping from 'components/Favorite/Favorite';
import { useState } from 'react';

export default function Favorite() {
  const [sum, setSum] = useState(0);

  return (
    <>
      <h1 className="main-title">Покупки</h1>
      <section className="buy-section">
        {/* <Shoping sum={sum} setSum={setSum} /> */}
        {/* <Form sum={sum} /> */}
      </section>
    </>
  );
}
