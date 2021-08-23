import style from "./style.css";

const BestPractice = () => {
    return (
        <div class={style.main}>
            <ul>
                <li>Always treat Light mode as default. Systems that don't support themes will fall back to Light mode</li>
                <li>Avoid inlining styles, use classes instead. It is easier to manage the theming with CSS classes</li>
            </ul>
        </div>
    );
};

export default BestPractice;
