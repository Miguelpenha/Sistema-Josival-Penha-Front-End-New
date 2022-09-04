import api from '../api'
import { IStudent, IClass, ITeacher } from '../types'
import Head from 'next/head'
import { Main, Container, Informations, ContainerInformation, TitleInformation, Information } from '../styles/pages'
import NavTools from '../components/NavTools'
import Loading from '../components/Loading'
import TableTeachers from '../components/tables/TableTeachers'
import TableClasses from '../components/tables/TableClasses'
import TableStudents from '../components/tables/TableStudents'

export default function Home() {
    const { data: students } = api.get<IStudent[]>('/students?teacher=true&class=true&photo=true')
    const { data: classes } = api.get<IClass[]>('/classes?teacher=true')
    const { data: teachers } = api.get<ITeacher[]>('/teachers')
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Sistema Josival Penha</title>
            </Head>
            <Main>
                <NavTools/>
                {students && classes && teachers ? (
                    <Container>
                        <Informations>
                            <ContainerInformation>
                                <TitleInformation>Total de Alunos</TitleInformation>
                                <Information>{students.length}</Information>
                            </ContainerInformation>
                            <ContainerInformation>
                                <TitleInformation>Total de Turmas</TitleInformation>
                                <Information>{classes.length}</Information>
                            </ContainerInformation>
                            <ContainerInformation>
                                <TitleInformation>Total de Professoras</TitleInformation>
                                <Information>{teachers.length}</Information>
                            </ContainerInformation>
                            <ContainerInformation>
                                <TitleInformation>Alunos por Turma</TitleInformation>
                                <Information>{(students.length/classes.length) || 0}</Information>
                            </ContainerInformation>
                            <ContainerInformation>
                                <TitleInformation>Ocupação das Vagas</TitleInformation>
                                <Information>{((students.length*100)/Number(process.env.NEXT_PUBLIC_TOTAL_VACANCIES)).toFixed(2)}%</Information>
                            </ContainerInformation>
                        </Informations>
                        <TableTeachers teachers={teachers}/>
                        <TableClasses classes={classes} teachers={teachers}/>
                        <TableStudents classes={classes} students={students} teachers={teachers}/>
                    </Container>
                ) : <Loading/>}
            </Main>
        </>
    )
}