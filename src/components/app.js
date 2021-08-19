import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Demo from "../routes/demo";
import BestPractice from "../routes/best-practice";
import { useThemes } from "./useThemes";
import style from "./style.css";

const App = () => {
	const [toggleTheme, isThemeReady, isDarkMode] = useThemes();

	if (!isThemeReady) {
		return (<div />);
	}

	return (
		<div id="app" class={isDarkMode() ? "dark" : "light"}>
			<Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<Router>
				<Home path="/" />
				<Demo path="/demo" />
				<BestPractice path="/best-practice" />
			</Router>
		</div>
	);
};

export default App;
