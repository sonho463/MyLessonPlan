import React from "react";

import './LessonPlan.css';

const LessonPlan = ({title, img, desc}) => {
	const clickHandler = () => {
		alert('Viva, Over40WebClub!');
	};

	const complexClickHandler = title => {
		alert(title);
	};

	return (
		<div>
			<section className="plan">
				<h2 className="title">{title}</h2>
				<img src={img} alt="" />
				<p className="desc">{desc}</p>
				<p>
				<button type="button" onClick={clickHandler}>
					clickHandler
				</button>
				<button type="button" onClick={() => complexClickHandler(title)}>
					complexClickHandler
				</button>
				</p>
				<hr/>
			</section>
		</div>
		// <div>
		// 	<form action="">
		// 		<h2><input type="date"></input></h2>
		// 		<p><textarea name="log" id="log" cols="30" rows="10"></textarea></p>
		// 	</form>
		// </div>
		);
	}

	export default LessonPlan;


// const SimpleDatePicker = () => {
//   const initialDate = new Date()
//   const [startDate, setStartDate] = useState(initialDate)
//   const handleChange = (date) => {
//     setStartDate(date)
//   }

//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={handleChange}
//     />
//   )
// }
