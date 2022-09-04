import styled, { css } from 'styled-components'

interface IContainer {
    open: boolean
}

export const Container = styled.nav<IContainer>`
    display: flex;
    height: 100vh;
    cursor: pointer;
    position: relative;
    flex-direction: column;
    transition-duration: 0.1s;
    animation: show 0.5s linear;
    transition-timing-function: linear;
    box-shadow: 1px 5px 10px rgb(0 0 0 / 30%);
    width: ${props => props.open ? '100%' : '40%'};
    border-top-right-radius: ${props => props.open ? 50 : 35}px;
    background-color: ${props => props.theme.backgroundColorSecondary};

    ${props => props.open ? css`
        border-bottom-right-radius: 50px;
    ` : css`
        img {
            width: 65%;
            margin-top: 20%;
        }

        ul {
            width: 80%;

            a>li {
                padding: 15%;
                
                span {
                    display: none;
                }

                svg {
                    width: 80%;
                    margin: auto;
                }
            }
        }
    `}
    
    @keyframes show {
        0% {
            left: -50%;
        }

        100% {
            left: 0%;
        }
    }
`

export const Logo = styled.img`
    width: 80%;
    margin-top: 12%;
    align-self: center;
    transition-duration: 0.1s;
    transition-timing-function: linear;
`

export const Options = styled.ul`
    width: 88%;
    margin-top: 10%;
    list-style: none;
    align-self: center;
`

export const ContainerOption = styled.a`
    :hover {
        li {
            transform: scale(1);
            background-color: ${props => props.theme.primary};
            box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;

            svg {
                fill: ${props => props.theme.colorSecondary};
            }

            span {
                color: ${props => props.theme.colorSecondary};
            }
        }
    }
`

export const Option = styled.li`
    padding: 4%;
    display: flex;
    margin-top: 5%;
    align-items: center;
    border-radius: 15px;
    transform: scale(0.9);
    transition-duration: 0.15s;
    transition-timing-function: linear;
`

export const OptionIcon = styled.svg`
    width: 20%;
    height: auto;
    margin-left: 2%;
    margin-right: 8%;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    fill: ${props => props.theme.primary};
`

export const OptionText = styled.span`
    font-size: 1.5vw;
    transition-duration: 0.1s;
    transition-timing-function: linear;
`