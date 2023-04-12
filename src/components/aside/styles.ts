import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
    padding: 20px 0 20px 20px;
`;