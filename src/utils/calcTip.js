export function calcTip(bill, tipPercentage, peopleCount) {
  const tipAmount = roundTwoDecimals(
    (bill * (tipPercentage / 100)) / peopleCount
  );
  const total = roundTwoDecimals(tipAmount + bill / peopleCount);
  return { tipAmount, total };
}

function roundTwoDecimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
