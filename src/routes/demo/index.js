import style from "./style.css";

const Demo = () => {
    return (
        <div class={style.main}>
            <section class={style.beach}>
                <h1 class="primary">Primary text</h1>
                <h3 class="secondary">Secondary text</h3>
                <p>Regular Text</p>
				<div class={style.cat} alt="kitty" />
            </section>
            <section class={style.paletteSection}>
                <span>Color Theme Palette:</span>
                <span class={`${style.palette} primary`}>&#x025FC;</span>
                <span class={`${style.palette} secondary`}>&#x025FC;</span>
                <span class={style.palette}>&#x025FC;</span>
            </section>
        </div>
    );
};

export default Demo;
