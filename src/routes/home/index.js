import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>prefers-color-scheme</h1>

		<p>This media feature for CSS is used to detect if the user prefers a light or dark color theme based on their operating system setting (e.g. light or dark mode) or a user agent setting.</p>

		<h2>Syntax:</h2>
		<div class={style.example}>
			<pre>
				@media (prefers-color-scheme: dark) {'{\n	...\n'}
				{'}\n\n'}

				@media (prefers-color-scheme: light) {'{\n	...\n'}
				{'}'}
			</pre>
		</div>

		<p>
			<strong>light</strong> - indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.
		</p>
		<p>
			<strong>dark</strong> - indicates that user has notified that they prefer an interface that has a dark theme.
		</p>

	</div>
);

export default Home;
