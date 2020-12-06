import React from "react";
import ReactDOM from "react-dom";

import Header from './Header'
import { lessons } from "./lessons";
import LessonPlan from './LessonPlan';

function MyLog() {

	console.log({...lessons});

  return (
    <>
			<div>
				<Header />
			</div>
      {/* <h4><LessonPlan /></h4> */}

			{/* <section className="planList">
				{lessons.map(lesson => <LessonPlan key={lesson.toString()} {...lesson} />)}
			</section> */}
			<section className="planList">
				{React.Children.toArray(
					lessons.map(lesson => <LessonPlan {...lesson} />)
				)}
			</section>

    </>
  );
}





ReactDOM.render(<MyLog />, document.getElementById("root"));
