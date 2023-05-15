import { useState } from "react";

const Calculator = () => {
  let [history, setHistory] = useState([]);
  let [current, setCurrent] = useState("0");
  let [total, setTotal] = useState("0");
  // let [expression, setExpression] = useState("");
  let [decimalUsed, setDecimalUsed] = useState(false);

  const changeValue = (val) => {
    if (val == "*" || val == "+" || val == "-" || val == "/" || val == "%") {
      setOperation(val);
    } else {
      let newVal = current === "0" ? val : current + val;
      setCurrent(newVal);
    }
  };

  const setDecimal = () => {
    let newVal = current === "0" ? "0." : current + ".";
    setCurrent(newVal);
    setDecimalUsed(true);
  };

  const erase = () => {
    let newString = current.slice(0, current.length - 1);
    console.log(newString);
    setCurrent(newString);
  };

  const setOperation = (val) => {
    if (
      current.charAt(current.length - 1) != "*" ||
      current.charAt(current.length - 1) != "+" ||
      current.charAt(current.length - 1) != "-" ||
      current.charAt(current.length - 1) != "/" ||
      current.charAt(current.length - 1) != "%"
    ) {
      let newString = current + val;
      setCurrent(newString);
    } else {
      erase();
      let newString = current + val;
      setCurrent(newString);
    }
  };

  const evaluate = () => {
    console.log(current, history);
    history.push(current);
    setTotal(eval(current));
    setCurrent("0");
  };

  const allClear = () => {
    setCurrent("0");
    setTotal("0");
  };

  return (
    <div className="bg-black p-8 ">
      <div>
        <div className="text-white">Ans.{total}</div>
        <div className="text-white">{current}</div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <button
            onClick={() => allClear()}
            className="w-16 h-16 bg-gray-400 text-black rounded-full"
          >
            C
          </button>
          <button
            onClick={() => erase()}
            className="w-16 h-16  bg-gray-400 text-black rounded-full"
          >
            Del
          </button>
          <button className="w-16 h-16  bg-gray-400 text-black rounded-full">
            %
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-orange-400 text-white rounded-full"
          >
            /
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            7
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            8
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            9
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-orange-400 text-white rounded-full"
          >
            *
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            4
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            5
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            6
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-orange-400 text-white rounded-full"
          >
            -
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            1
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            2
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            3
          </button>
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-orange-400 text-white rounded-full"
          >
            +
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => changeValue(e.target.innerText)}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            0
          </button>
          <button
            onClick={() => {
              decimalUsed ? null : setDecimal();
            }}
            className="w-16 h-16  bg-gray-900 text-white rounded-full"
          >
            .
          </button>
          <button
            onClick={() => {
              evaluate();
            }}
            className="w-16 h-16  bg-orange-400 text-white rounded-full"
          >
            =
          </button>
        </div>
      </div>
      <div className="text-white">
        <h1 className="text-4xl">History</h1>
        <button className="border border-white rounded-sm bg-gray-950">
          click-here
        </button>
      </div>
    </div>
  );
};
export default Calculator;
