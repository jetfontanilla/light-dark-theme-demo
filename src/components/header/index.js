import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>CSS prefers-color-scheme demo</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Basic</Link>
			<Link activeClassName={style.active} href="/demo">Demo</Link>
			<Link activeClassName={style.active} href="/best-practice">Best Practices</Link>
		</nav>
	</header>
);

export default Header;
