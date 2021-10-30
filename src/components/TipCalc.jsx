import React from "react";
import { useTip } from "../hooks/useTip";

import "../styles/components/TipCalc.css";
import { calcTip } from "../utils/calcTip";
import { Result } from "./Result";

export const TipCalc = () => {
  const { state, updateState } = useTip();
  const { tipAmount, total } = calcTip(
    state.bill,
    state.tipPercentage,
    state.peopleCount
  );

  return (
    <section className="tipCalc">
      <div className="tipCalc__info">
        <div className="form-control">
          <p className="tipCalc__label">Bill</p>
          <input
            className="tipCalc__input tipCalc__input--bg tipCalc__input--bg-dollar"
            type="text"
            placeholder="0"
            onChange={(ev) => updateState("bill", Number(ev.target.value))}
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
              onChange={(ev) =>
                updateState("tipPercentage", Number(ev.target.value))
              }
            />
          </div>
        </div>

        <div className="form-control">
          <p className="tipCalc__label">Number of People</p>
          <input
            className="tipCalc__input tipCalc__input tipCalc__input--bg tipCalc__input--bg-person"
            type="text"
            placeholder="0"
            onChange={(ev) =>
              updateState("peopleCount", Number(ev.target.value))
            }
          />
        </div>
      </div>

      <Result tipAmount={tipAmount} total={total} />
    </section>
  );
};
