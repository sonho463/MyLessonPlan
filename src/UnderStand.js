import React, { useState, useEffect } from 'react';
import './UnderStand.css';



function Counter() {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
	};

  const CountUp = () => {
    if(count<10){
			setCount( count+1 );
    };
	}

  const CountDown = () => {
    if(count > 0){
      setCount(count-1);
    };
	}

	useEffect(()=>{
		if(count === 10){
			alert('満点です！');
		}
	},[count])

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

        <button className="button up" onClick={CountUp}>
          ＋
        </button>
        <button className="button down" onClick={CountDown}>
          ー
        </button>

        <button className="button reset" onClick={reset}>
          リセット
        </button>
				<h4 className="point">{heart(count)}</h4>
      </section>
    </>
  );
};

export default Counter;
