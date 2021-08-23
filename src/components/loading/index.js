import style from "./style.css";

const Loading = ({loaderColor, loaderClass}) => (
    <div class={style.wrap}>
        <div className={`${style.loader} ${loaderClass}`} style={{borderLeftColor: loaderColor}}>Loading...</div>
    </div>
);

export default Loading;
