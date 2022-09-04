import styled from 'styled-components'

export const Container = styled.table`
    width: 90%;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 20px;
    border-collapse: collapse;
    animation: showTable 0.5s linear;
    background-color: ${props => props.theme.backgroundColorSecondary};

    thead {
        tr{
            color: ${props => props.theme.primary};

            th {
                border: 1px solid ${props => props.theme.backgroundColor};

                &.title-primary {
                    padding-top: 1%;
                    font-size: 1.5vw;
                    padding-bottom: 1%;
                }

                &.title {
                    font-size: 1.2vw;
                    padding-top: 0.8%;
                    padding-bottom: 0.8%;
                }

                input, select {
                    width: 100%;
                    border: none;
                    padding: 5% 4%;
                    transition-duration: 0.1s;
                    transition-timing-function: linear;

                    :focus {
                        outline: none;
                        background-color: ${props => props.theme.backgroundColor};
                    }
                }
            }
        }
    }

    tbody {
        tr {
            font-size: 1.2vw;
            transition-duration: 0.1s;
            transition-timing-function: linear;

            :hover {
                cursor: pointer;
                transform: scale(0.98);
                background-color: ${props => props.theme.backgroundColor};
            }
        }
    }

    @keyframes showTable {
        0% {
            width: 10%;
            opacity: 0;
        }

        100% {
            width: 90%;
            opacity: 1;
        }
    }
`