import React from "react";

import "../styles/components/TipCalc.css";

export const TipCalc = () => {
  return (
    <section className="tipCalc">
      <div className="tipCalc__info">
        <div className="form-control">
          <p className="tipCalc__label">Bill</p>
          <input
            className="tipCalc__input tipCalc__input--bg tipCalc__input--bg-dollar"
            type="text"
            placeholder="0"
          />
        </div>

        <div>
          <p className="tipCalc__label">Select Tip %</p>
          <div className="tipCalc__tip-grid">
            <button>5%</button>
            <button>10%</button>
            <button className="active">15%</button>
            <button>25%</button>
            <button>50%</button>
            <input
              className="tipCalc__input"
              type="text"
              placeholder="Custom"
            />
          </div>
        </div>

        <div className="form-control">
          <p className="tipCalc__label">Number of People</p>
          <input
            className="tipCalc__input tipCalc__input tipCalc__input--bg tipCalc__input--bg-person"
            type="text"
            placeholder="0"
          />
        </div>
      </div>

      <div className="tipCalc__result">
        <div className="tipCalc__result__item">
          <div className="tipCalc__result__item__info">
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <p className="tipCalc__result__item__amount">$4.27</p>
        </div>
        <div className="tipCalc__result__item">
          <div className="tipCalc__result__item__info">
            <p>Total</p>
            <p>/ person</p>
          </div>
          <p className="tipCalc__result__item__amount">$32.79</p>
        </div>
        <button className="tipCalc__result__reset-btn">Reset</button>
      </div>
    </section>
  );
};
