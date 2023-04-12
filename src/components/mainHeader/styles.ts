
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
   
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3`
    color: ${props => props.theme.colors.white};
`;

export const AppName = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
    padding-top: 5px;
    padding-bottom: 5px;
`;