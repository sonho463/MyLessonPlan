import React from "react";
import ReactDOM from "react-dom";

import Header from './Header'
import { plans } from "./plans";
import LessonPlan from './LessonPlan'

function MyLog() {
  return (
    <>
			<div>
				<Header />
			</div>
      {/* <h4><LessonPlan /></h4> */}

			<section className="planList">
				{plans.map(plan => (
					<LessonPlan key={plan.id} {...plan} />
				))}
			</section>
    </>
  );
}



ReactDOM.render(<MyLog />, document.getElementById("root"));
