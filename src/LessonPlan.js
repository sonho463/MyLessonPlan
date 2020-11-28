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
					<div className="article">
						<img src={img} alt="" />
						<p className="desc">{desc}</p>
					</div>

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
		);
	}

	export default LessonPlan;
