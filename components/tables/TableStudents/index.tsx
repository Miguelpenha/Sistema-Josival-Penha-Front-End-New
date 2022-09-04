import { IClass, IStudent, ITeacher } from '../../../types'
import { FC, useState } from 'react'
import { Container } from './style'
import filter from './filter'
import ModalStudent from '../../modals/ModalStudent'

interface Iprops {
    classes: IClass[]
    students: IStudent[]
    teachers: ITeacher[]
}

const TableStudents: FC<Iprops> = ({ students, classes, teachers }) => {
    const [openModal, setOpenModal] = useState<IStudent | null>(null)
    const [classFilter, setClassFilter] = useState<string | null>()
    const [teacherFilter, setTeacherFilter] = useState<string | null>()
    const [nameFilter, setNameFilter] = useState<string>('')
    const [responsibleFilter, setResponsibleFilter] = useState<string>('')
    const [genderFilter, setGenderFilter] = useState<string | null>()
    
    return (
        <Container>
            <thead>
                <tr>
                    <th scope="col" colSpan={6} className="title-primary">Alunos</th>
                </tr>
                <tr>
                    <th scope="col" className="title">Foto</th>
                    <th scope="col" className="title">Nome</th>
                    <th scope="col" className="title">Turma</th>
                    <th scope="col" className="title">Professora</th>
                    <th scope="col" className="title">Responsável</th>
                    <th scope="col" className="title">Gênero</th>
                </tr>
                <tr>
                    <th></th>
                    <th scope="col">
                        <input
                            type="search"
                            id="nameFilter"
                            name="nameFilter"
                            value={nameFilter}
                            placeholder="Nome do aluno..."
                            onChange={ev => setNameFilter(ev.target.value)}
                        />
                    </th>
                    <th scope="col">
                        <select
                            id="classFilter"
                            name="classFilter"
                            defaultValue="Nenhuma selecionada"
                            onChange={ev => setClassFilter(ev.target.value != 'Nenhuma selecionada' ? ev.target.value : null)} 
                        >
                            <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                            {classes.map(classSelect => classSelect.studentCount >= 1 && (
                                <option
                                    key={classSelect._id}
                                    value={classSelect.name}
                                >
                                    {classSelect.name} ({classSelect.studentCount} alunos)
                                </option>
                            ))}
                        </select>
                    </th>
                    <th scope="col">
                        <select
                            id="teacherFilter"
                            name="teacherFilter"
                            defaultValue="Nenhuma selecionada"
                            onChange={ev => setTeacherFilter(ev.target.value != 'Nenhuma selecionada' ? ev.target.value : null)} 
                        >
                            <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                            {teachers.map(teacher => teacher.classCount >= 1 && (
                                <option key={teacher._id} value={teacher.name}>{teacher.name} ({teacher.classCount} alunos)</option>
                            ))}
                        </select>
                    </th>
                    <th scope="col">
                        <input
                            type="search"
                            id="responsibleFilter"
                            name="responsibleFilter"
                            value={responsibleFilter}
                            placeholder="Nome dos responsáveis..."
                            onChange={ev => setResponsibleFilter(ev.target.value)}
                        />
                    </th>
                    <th scope="col">
                        <select
                            id="genderFilter"
                            name="genderFilter"
                            defaultValue="Nenhuma selecionada"
                            onChange={ev => setGenderFilter(ev.target.value != 'Nenhuma selecionada' ? ev.target.value : null)} 
                        >
                            <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                            <option key="Masculino" value="Masculino">Masculino</option>
                            <option key="Feminino" value="Feminino">Feminino</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => filter(student, classFilter, teacherFilter, nameFilter, responsibleFilter, genderFilter) && (
                    <tr key={student._id} onClick={() => setOpenModal(student)}>
                        <td scope="col" align="center">
                            <img src={student.photo.url} alt="Foto do aluno" width="15%"/>
                        </td>
                        <td scope="col" align="center">{student.name}</td>
                        <td scope="col" align="center">{student.class.name}</td>
                        <td scope="col" align="center">{student.teacher.name}</td>
                        <td scope="col" align="center">{student.responsible1}<br/>{student.responsible2}</td>
                        <td scope="col" align="center">{student.gender}</td>
                    </tr>
                ))}
            </tbody>
            <ModalStudent openModal={openModal} setOpenModal={setOpenModal} classes={classes}/>
        </Container>
    )
}

export default TableStudents