import React from "react";

import "../styles/components/Result.css";

export const Result = ({ tipAmount, total }) => {
  return (
    <div className="result">
      <div className="result__item">
        <div className="result__item__info">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className="result__item__amount">${tipAmount}</p>
      </div>
      <div className="result__item">
        <div className="result__item__info">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="result__item__amount">${total}</p>
      </div>
      <button className="result__reset-btn">Reset</button>
    </div>
  );
};
