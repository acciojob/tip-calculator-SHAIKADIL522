import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);

  const b = parseFloat(bill) || 0;
  const t = parseFloat(tip) || 0;
  const p = parseFloat(people) || 0;

  const tipPerPerson = p > 0 ? (b * t / 100) / p : 0;

  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label htmlFor="tip">Tip Percentage</label>
      <input
        id="tip"
        type="number"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />

      <label htmlFor="people">Number of People</label>
      <input
        id="people"
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <p>Tip Per Person: ${tipPerPerson.toFixed(2)}</p>
    </div>
  );
};

export default App;