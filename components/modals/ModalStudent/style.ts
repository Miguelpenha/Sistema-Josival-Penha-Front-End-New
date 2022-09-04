import styled from 'styled-components'

export const ContainerPhoto = styled.a`
    width: 35%;
    display: flex;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 50%;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    
    :hover {
        border-radius: 25%;
        filter: brightness(0.9);
    }
`

export const Photo = styled.img`
    width: 100%;
    display: flex;
    border-radius: 50%;
    transition-duration: 0.1s;
    transition-timing-function: linear;

    :hover {
        border-radius: 25%;
    }
`