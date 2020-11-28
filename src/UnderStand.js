import React, { useState } from 'react';
import './UnderStand.css';

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

	const heart = (num) => {
		let output = '';

		for(let i = 0; i < num; i++){
			output += '♥'
		};

		return (
			<>
				<p>{output}</p>
			</>
		)

	}


  return (
    <>
      <section className="item">

				<h2>理解度</h2>

        <button className="button" onClick={CountUp}>
          ＋
        </button>
        <button className="button" onClick={CountDown}>
          ー
        </button>

        <button className="button reset" onClick={reset}>
          リセット
        </button>
				<p>{heart(count)}</p>
      </section>
    </>
  );
};

export default Counter;
