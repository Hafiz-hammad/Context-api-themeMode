import { useEffect, useState } from 'react';
import { ThemeProvider } from './Context/theme'; // Corrected import

import './App.css';
import ThemeBtn from './components/Card/Themebtn';
import Card from './components/Card/Card';

function App() {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(themeMode); // Add the current theme
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;