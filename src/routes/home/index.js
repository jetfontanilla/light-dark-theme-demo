import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<section>
			<h1>CSS approach</h1>

			<p><strong>prefers-color-scheme:</strong> This media feature for CSS is used to detect if the user prefers a light or dark color theme based on their operating system setting (e.g. light or dark mode) or a user agent setting.</p>

			<strong>Example:</strong>
			<div className={style.example}>
				<pre>
					@media (prefers-color-scheme: dark) {'{\n'}
					{'\t'}color: #fff;{'\n'}
					{'\t'}background: #333;{'\n'}
					{'}\n\n'}

					@media (prefers-color-scheme: light) {'{\n'}
					{'\t'}color: #000;{'\n'}
					{'\t'}background: #fff;{'\n'}
					{'}'}
				</pre>
			</div>

			<p>
				<strong>light</strong> - indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.<br/>
				<strong>dark</strong> - indicates that user has notified that they prefer an interface that has a dark theme.
			</p>
		</section>

		<section>
			<h1>JavaScript approach</h1>

			<p>use <strong>Window.matchMedia()</strong> to query the current document's media query list and match dark or light mode</p>

			<strong>Example:</strong>
			<div className={style.example}>
				<pre>
					const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches{'\n'}
					const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
				</pre>
			</div>
		</section>


	</div>
);

export default Home;
