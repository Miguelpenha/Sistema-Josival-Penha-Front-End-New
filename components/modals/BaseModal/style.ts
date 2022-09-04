import styled, { keyframes, css } from 'styled-components'
import ModalNotStyled from 'react-modal'

const show = keyframes`
    0% {
        margin-right: -40%;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    100% {
        margin-right: 0%;
    }
`

export const Modal = styled(ModalNotStyled)`
    width: 35%;
    padding: 2%;
    outline: none;
    display: flex;
    overflow-y: auto;
    margin-left: auto;
    flex-direction: column;
    transition-duration: 0.1s;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    transition-timing-function: linear;
    box-shadow: 1px 5px 10px rgb(0 0 0 / 30%);
    background-color: ${props => props.theme.backgroundColorSecondary};

    ${props => props.isOpen && css`
        animation: ${show} 1s;
    `}
`

export const IconBack = styled.svg`
    width: 14%;
    display: flex;
    cursor: pointer;
    border-radius: 25%;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    fill: ${props => props.theme.primary};

    :hover {
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
    }
`