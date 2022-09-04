import { useState } from 'react'
import { Container, Logo, Options, ContainerOption, Option, OptionIcon, OptionText } from './style'
import Link from 'next/link'

function NavTools() {
    const [open, setOpen] = useState(false)
    
    return (
        <Container open={open} onClick={() => setOpen(!open)}>
            <Logo src={`/img/${open ? 'Logo Josival Penha.png' : 'Logo Josival Penha simplified.svg'}`}/>
            <Options>
                <Link href="/">
                    <ContainerOption onClick={event => {
                        event.stopPropagation()
                        event.cancelable = true
                    }}>
                        <Option>
                            <OptionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="m23.95 42-14.5-7.95v-12L2 18 23.95 6 46 18v15.85h-3v-14.1l-4.55 2.3v12Zm0-15.4L39.7 18 23.95 9.55 8.3 18Zm0 12 11.5-6.35v-8.4L23.95 30l-11.5-6.25v8.5Zm.05-12Zm-.05 3.7Zm0 0Z"/>
                            </OptionIcon>
                            <OptionText>Alunos</OptionText>
                        </Option>
                    </ContainerOption>
                </Link>
                <Link href="/">
                    <ContainerOption onClick={event => {
                        event.stopPropagation()
                        event.cancelable = true
                    }}>
                        <Option>
                            <OptionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="m23.95 42-14.5-7.95v-12L2 18 23.95 6 46 18v15.85h-3v-14.1l-4.55 2.3v12Zm0-15.4L39.7 18 23.95 9.55 8.3 18Zm0 12 11.5-6.35v-8.4L23.95 30l-11.5-6.25v8.5Zm.05-12Zm-.05 3.7Zm0 0Z"/>
                            </OptionIcon>
                            <OptionText>Acadêmico</OptionText>
                        </Option>
                    </ContainerOption>
                </Link>
                <Link href="/">
                    <ContainerOption onClick={event => {
                        event.stopPropagation()
                        event.cancelable = true
                    }}>
                        <Option>
                            <OptionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="m23.95 42-14.5-7.95v-12L2 18 23.95 6 46 18v15.85h-3v-14.1l-4.55 2.3v12Zm0-15.4L39.7 18 23.95 9.55 8.3 18Zm0 12 11.5-6.35v-8.4L23.95 30l-11.5-6.25v8.5Zm.05-12Zm-.05 3.7Zm0 0Z"/>
                            </OptionIcon>
                            <OptionText>Dashboard</OptionText>
                        </Option>
                    </ContainerOption>
                </Link>
            </Options>
        </Container>
    )
}

export default NavTools