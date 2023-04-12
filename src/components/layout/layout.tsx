import React from "react";
import {Grid} from './styles';
import MainHeader from "../mainHeader/mainHeader";
import Aside from "../aside/aside";
import Content from "../content/content";

const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content/>
        </Grid>
    );
}

export default Layout;