import { h } from 'preact';
import style from './style.css';

const Toggle = ({ toggleTheme, isDarkMode }) => (
	<label className={style.switch}>
		<input type="checkbox" onClick={toggleTheme} checked={isDarkMode()} />
		<span className={style.slider} />
	</label>
);

export default Toggle;
