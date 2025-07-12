import React, { useState } from 'react';
import { Input } from './components';
import useCurrencyinfo from './hooks/currencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currInfo = useCurrencyinfo(from);
  const options = Object.keys(currInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertor = () => {
    setConvertedAmount(amount * currInfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] font-mono">
      <div className="w-full max-w-md mx-auto backdrop-blur-lg bg-white/10 border border-cyan-300 rounded-xl p-6 shadow-2xl">
        <h1 className="text-center text-2xl font-bold text-cyan-300 mb-6">💱 Crypto Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertor();
          }}
        >
          <div className="w-full mb-4">
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencychange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountchange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full my-3 flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="rotate-anim bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 text-white px-3 py-2 rounded-full shadow-md"
            >
              🔄 Swap
            </button>
          </div>
          <div className="w-full mb-4">
            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencychange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white text-lg font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Convert {from.toUpperCase()} ➡ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
