import {createContext} from 'react';

export const LOCAL_STORAGE_THEME = 'theme';

export enum Theme {
    LIGHT = 'light-theme',
    DARK = 'dark-theme',
}

type ContextType = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ContextType>({});
