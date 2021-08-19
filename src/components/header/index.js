import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Light / Dark theme demo</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Basics</Link>
			<Link activeClassName={style.active} href="/demo">Demo</Link>
			<Link activeClassName={style.active} href="/best-practice">Best Practices</Link>
		</nav>
	</header>
);

export default Header;
