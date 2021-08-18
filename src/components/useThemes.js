import { useEffect, useState } from "preact/hooks";

const LIGHT_MODE = "light";
const DARK_MODE = "dark";

export const useThemes = () => {
    const [theme, setTheme] = useState(LIGHT_MODE);
    const [isThemeReady, setThemeReady] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };
    const toggleTheme = () => {
        theme === LIGHT_MODE ? setMode(DARK_MODE) : setMode(LIGHT_MODE);
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") || LIGHT_MODE;
        setTheme(localTheme);
        setThemeReady(true);
    }, []);

    return [theme, toggleTheme, isThemeReady];
};
