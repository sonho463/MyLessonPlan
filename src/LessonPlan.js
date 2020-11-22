import React from "react";

import './LessonPlan.css';

const LessonPlan = () => {
	return (
		<div>
			<section class="plan">
				<h2 class="title">techmeets模写</h2>
				<img src="https://cdn.pixabay.com/photo/2020/11/02/13/25/north-sea-oats-5706656_1280.jpg" alt="" />
				<p className="desc">
					テックミーツというスクールが提供してくれた実際の案件に近いもの。
					５００００円の案件だということで、現在まだ進行中のため、
					Sonの時給はひどく低いものになっている。
				</p>
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

export default LessonPlan;
