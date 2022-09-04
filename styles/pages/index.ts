import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-columns: 0.3fr 1.7fr;
`

export const Container = styled.div`
    width: 95%;
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Informations = styled.div`
    display: flex;
    margin-top: 10%;
    margin-bottom: 4%;
    justify-content: space-around;
`

export const ContainerInformation = styled.div`
    width: 20%;
    padding: 1.5%;
    display: flex;
    cursor: pointer;
    border-radius: 20px;
    transform: scale(0.9);
    flex-direction: column;
    transition-duration: 0.15s;
    animation: jump 0.5s linear;
    transition-timing-function: linear;
    background-color: ${props => props.theme.backgroundColorSecondary};
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;

    :hover {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.16) 0 6px 9px, rgba(0, 0, 0, 0.23) 0 6px 9px;
    }

    @keyframes jump {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(0.9);
        }
    }
`

export const TitleInformation = styled.span`
    font-weight: 400;
    font-size: 1.4vw;
    margin-bottom: 2%;
`

export const Information = styled.span`
    font-size: 2.2vw;
    font-weight: bolder;
    color: ${props => props.theme.primary};
`