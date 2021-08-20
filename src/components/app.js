import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Demo from "../routes/demo";
import BestPractice from "../routes/best-practice";
import { useThemes } from "./useThemes";
import "./style.css";

const App = () => {
	const [toggleTheme, isThemeReady, isDarkMode] = useThemes();

	if (!isThemeReady) {
		return (<div />);
	}

	return (
		<div id="app" class={isDarkMode() ? "dark" : "light"}>
			<Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<Router>
				<Home path="/light-dark-theme-demo/" />
				<Demo path="/light-dark-theme-demo/demo" />
				<BestPractice path="/light-dark-theme-demo/best-practice" />
			</Router>
		</div>
	);
};

export default App;
