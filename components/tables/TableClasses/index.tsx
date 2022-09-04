import { IClass, ITeacher } from '../../../types'
import { FC, useState } from 'react'
import { Container } from './style'
import filter from './filter'
import ModalClass from '../../modals/ModalClass'

interface Iprops {
    classes: IClass[]
    teachers: ITeacher[]
}

const TableClasses: FC<Iprops> = ({ classes, teachers }) => {
    const [openModal, setOpenModal] = useState<IClass | null>(null)
    const [teacherFilter, setTeacherFilter] = useState<string | null>()
    const [gradeFilter, setGradeFilter] = useState<string | null>()
    const [shiftFilter, setShiftFilter] = useState<string | null>()
    const [nameFilter, setNameFilter] = useState<string>('')
    const [studentCountFilter, setStudentCountFilter] = useState<number>(0)

    return (
        <Container>
            <thead>
                <tr>
                    <th scope="col" colSpan={5} className="title-primary">Turmas</th>
                </tr>
                <tr>
                    <th scope="col" className="title">Nome</th>
                    <th scope="col" className="title">Série</th>
                    <th scope="col" className="title">Professora</th>
                    <th scope="col" className="title">Alunos</th>
                    <th scope="col" className="title">Turno</th>
                </tr>
                <tr>
                    <th scope="col">
                        <input
                            type="search"
                            id="nameFilter"
                            name="nameFilter"
                            value={nameFilter}
                            placeholder="Nome da turma..."
                            onChange={ev => setNameFilter(ev.target.value)}
                        />
                    </th>
                    <th scope="col">
                        <select
                            id="gradeFilter"
                            name="gradeFilter"
                            defaultValue="Nenhuma selecionada"
                            onChange={ev => setGradeFilter(ev.target.value != 'Nenhuma selecionada' ? ev.target.value : null)} 
                        >
                            <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                            <option value="1° ano">1° ano</option>
                            <option value="2° ano">2° ano</option>
                            <option value="3° ano">3° ano</option>
                            <option value="4° ano">4° ano</option>
                            <option value="5° ano">5° ano</option>
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
                                <option key={teacher._id} value={teacher.name}>{teacher.name} ({teacher.classCount} classes)</option>
                            ))}
                        </select>
                    </th>
                    <th scope="col">
                        <input
                            min="0"
                            type="number"
                            id="studentCountFilter"
                            name="studentCountFilter"
                            value={studentCountFilter}
                            onChange={ev => setStudentCountFilter(Number(ev.target.value))}
                        />
                    </th>
                    <th scope="col">
                        <select
                            id="shiftFilter"
                            name="shiftFilter"
                            defaultValue="Nenhuma selecionada"
                            onChange={ev => setShiftFilter(ev.target.value != 'Nenhuma selecionada' ? ev.target.value : null)}
                        >
                            <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Manhã">Manhã</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {classes.map(classSelect => filter(classSelect, teacherFilter, gradeFilter, shiftFilter, nameFilter, studentCountFilter) && (
                    <tr key={classSelect._id} onClick={() => setOpenModal(classSelect)}>
                        <td scope="col" align="center">{classSelect.name}</td>
                        <td scope="col" align="center">{classSelect.grade}</td>
                        <td scope="col" align="center">{classSelect.teacher.name}</td>
                        <td scope="col" align="center">{classSelect.studentCount}</td>
                        <td scope="col" align="center">{classSelect.shift}</td>
                    </tr>
                ))}
            </tbody>
            <ModalClass openModal={openModal} setOpenModal={setOpenModal} teachers={teachers}/>
        </Container>
    )
}

export default TableClasses