import React from "react";
import ReactDOM from "react-dom";

import Header from './Header'
import { lessons } from "./lessons";
import LessonPlan from './LessonPlan';

function MyLog() {
  return (
    <>
			<div>
				<Header />
			</div>
      {/* <h4><LessonPlan /></h4> */}

			<section className="planList">
				{lessons.map(lesson => (
					<LessonPlan key={lesson.id} {...lesson} />
				))}
			</section>

    </>
  );
}



ReactDOM.render(<MyLog />, document.getElementById("root"));
