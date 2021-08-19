import style from "./style.css";

const Demo = () => {

	return (
		<div class={style.main}>
			<section class={style.beach}>
				<h1 class={style.primary}>Primary text</h1>
				<h3 class={style.secondary}>Secondary text</h3>
				<p>Regular Text</p>
			</section>
			<section class={style.paletteSection}>
				<span>Color Theme Palette:</span>
				<span class={`${style.palette} ${style.primary}`}>&#x025FC;</span>
				<span class={`${style.palette} ${style.secondary}`}>&#x025FC;</span>
				<span class={style.palette}>&#x025FC;</span>
			</section>
		</div>
	);
};

export default Demo;
