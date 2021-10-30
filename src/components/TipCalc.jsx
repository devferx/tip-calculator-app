import React, { useState } from "react";
import { useTip } from "../hooks/useTip";

import "../styles/components/TipCalc.css";
import { calcTip } from "../utils/calcTip";
import { Result } from "./Result";

const percentagesButtons = [5, 10, 15, 25, 50];

export const TipCalc = () => {
  const { state, updateState } = useTip();
  const [activeButton, setActiveButton] = useState(0);
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
            {percentagesButtons.map((percentage) => (
              <button
                onClick={() => updateState("tipPercentage", percentage)}
                className={percentage === state.tipPercentage && `active`}
              >
                {percentage}%
              </button>
            ))}

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
            placeholder="1"
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
