import React from "react";

import "../styles/components/Result.css";

export const Result = () => {
  return (
    <div className="result">
      <div className="result__item">
        <div className="result__item__info">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className="result__item__amount">$4.27</p>
      </div>
      <div className="result__item">
        <div className="result__item__info">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="result__item__amount">$32.79</p>
      </div>
      <button className="result__reset-btn">Reset</button>
    </div>
  );
};
