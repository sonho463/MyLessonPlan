import React from "react";

import './LessonPlan.css';
import UnderStand from './UnderStand'



const LessonPlan = ({title, img, desc}) => {

	return (
		<div>
			<section className="plan">
				<div className="title_area">
					<h2 className="title">{title}</h2>
				</div>
				<div className="article">
					<img src={img} alt="" />
					<p className="desc">{desc}</p>
				</div>
				<UnderStand />
				<hr/>
			</section>
		</div>
		);
	}

	export default LessonPlan;
