import React from "react";
import Layout from "./components/layout/layout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import  dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}

export default App;