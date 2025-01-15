// import React,{useContext,createContext} from "react";

// export const ThemeContext = ({
//     themeMode:"light",
// darkTheme:()=>{},
// lightTheme:()=>{},
// })
// export const themeProvider = ThemeContext.Provider


// export default function useTheme (){
// return useContext(ThemeContext)

// }


// ///

import React, { useContext, createContext, useState } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}