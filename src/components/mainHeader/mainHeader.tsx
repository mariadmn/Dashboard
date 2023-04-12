import React from "react";
import {Container, Profile, Welcome, AppName} from './styles';
import Toggle from "../toggle/toggle";

const MainHeader: React.FC = () => {
    return (
        <Container>
            <AppName>
                <h1>Dashboard</h1>
                <Toggle/>
            </AppName>
            <Profile>
                <Welcome>Olá</Welcome>
            </Profile>
        </Container>
    );
}

export default MainHeader;