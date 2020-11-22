import React from 'react';
import './Header.css';


const Header = () => {
	return(
	<header>
		<h1>MyLessonPlan</h1>
		<nav>
			<ul>
				<a href="./index.js">
					<li>home</li>
				</a>
				<a href="./index.js">
					<li>about</li>
				</a>
			</ul>
		</nav>
	</header>
	)
}

export default Header;
