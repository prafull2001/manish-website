import React, { createContext, useState } from 'react';

import { theDarkTheme } from '../theme/theme';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(theDarkTheme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const value = { theme, drawerOpen, setHandleDrawer };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
