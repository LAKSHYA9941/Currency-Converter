import React, { useId } from 'react';

function Input({
  label,
  className,
  onAmountchange,
  amount,
  onCurrencychange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencydisabled = false,
}) {
  const AmountinputID = useId();
  return (
    <div className={`flex justify-between bg-white/20 backdrop-blur-sm border border-cyan-200 p-4 rounded-lg shadow-inner text-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor={AmountinputID} className="text-cyan-200 text-xs mb-1 block">
          {label}
        </label>
        <input
          id={AmountinputID}
          className="outline-none w-full bg-transparent text-white placeholder-cyan-100 py-2"
          type="number"
          placeholder="Enter Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end text-right">
        <label className="text-cyan-200 text-xs mb-1">Currency</label>
        <select
          className="rounded-md bg-cyan-800 text-white py-1 px-2 outline-none cursor-pointer hover:bg-cyan-700 transition"
          value={selectCurrency}
          onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
          disabled={currencydisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
