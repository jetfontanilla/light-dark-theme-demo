import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Toggle from "../toggle";
import githubLight from "./github-light.png";
import githubDark from "./github-dark.png";

const Header = ({ toggleTheme, isDarkMode }) => (
	<header class={style.header}>
		<a href="https://github.com/jetfontanilla/light-dark-theme-demo">
			<img src={isDarkMode() ? githubDark : githubLight} width="32" height="32" alt="View on Github" />
		</a>
		<h1>Light / Dark theme demo</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Basics</Link>
			<Link activeClassName={style.active} href="/demo">Demo</Link>
			<Link activeClassName={style.active} href="/best-practice">Best Practices</Link>
		</nav>
		<span class={style.toggleLabel}>
			<span style={{fontSize: "0.8em"}}>Current Theme</span><br />
			<strong>{isDarkMode() ? "DARK" : "LIGHT"}</strong>
		</span>
		<Toggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
	</header>
);

export default Header;
