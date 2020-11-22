import React from "react";
import ReactDOM from "react-dom";

import Header from './Header'
import LessonPlan from './LessonPlan'

function MyLog() {
  return (
    <>
			<div>
				<Header />
			</div>
      <h4><LessonPlan /></h4>
    </>
  );
}



ReactDOM.render(<MyLog />, document.getElementById("root"));
