import style from "./style.css";
import Loading from "../../components/loading";

const BestPractice = () => {
    return (
        <div class={style.main}>
            <ul>
                <li>Always treat Light mode as default. Systems that don't support themes will fall back to Light mode</li>
                <li>Avoid inlining styles, use classes instead. It is easier to manage the theming with CSS classes</li>
            </ul>
            <section>
                <div style={{color: "#512e8e"}}>I am primary???</div>
                <div style={{color: "#9b89b9"}}>I am secondary???</div>
                <div style={{color: "#333"}}>I am regular text???</div>
            </section>
            <section>
                <p>Loaders using theme classes</p>
                <div className={style.loaderWrap}>
                    <Loading loaderClass={"primary"} />
                    <Loading loaderClass={"secondary"} />
                </div>
                <p>Loaders using fixed colors</p>
                <div className={style.loaderWrap}>
                    <Loading loaderColor={"#444"} />
                    <Loading loaderColor={"#160433"} />
                </div>
            </section>
        </div>
    );
};

export default BestPractice;
