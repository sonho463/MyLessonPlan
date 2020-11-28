import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };

  const CountUp = () => {
    if(count<10){
      setCount( count+1 );
    }else{
      alert('最高は１０です。');
    };
  }

  const CountDown = () => {
    if(count > 0){
      setCount(count-1);
    }else{
      alert('最低は０です。');
    };
  }


  return (
    <>
      <section className="item">
        <h1>理解度</h1>
        <h2>{count}</h2>
        <button className="button" onClick={CountUp}>
          ＋
        </button>
        <button className="button" onClick={CountDown}>
          ー
        </button>

        <button className="button" onClick={reset}>
          リセット
        </button>
      </section>
    </>
  );
};

export default Counter;
