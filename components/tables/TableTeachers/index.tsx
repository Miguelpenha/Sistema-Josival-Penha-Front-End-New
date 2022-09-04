import { ITeacher } from '../../../types'
import { FC, useState } from 'react'
import { Container } from './style'
import filter from './filter'
import ModalTeacher from '../../modals/ModalTeacher'

interface Iprops {
    teachers: ITeacher[]
}

const TableTeachers: FC<Iprops> = ({ teachers }) => {
    const [openModal, setOpenModal] = useState<ITeacher | null>(null)
    const [nameFilter, setNameFilter] = useState<string>('')
    const [genderFilter, setGenderFilter] = useState<string | null>()
    const [studentCountFilter, setStudentCountFilter] = useState<number>(0)

    return (
        <Container>
            <thead>
                <tr>
                    <th scope="col" colSpan={3} className="title-primary">Professoras</th>
                </tr>
                <tr>
                    <th scope="col" className="title">Nome</th>
                    <th scope="col" className="title">Gênero</th>
                    <th scope="col" className="title">Turmas</th>
                </tr>
                <tr>
                    <th scope="col">
                        <input
                            type="search"
                            id="nameFilter"
                            name="nameFilter"
                            placeholder="Nome da professora..."
                            onChange={ev => setNameFilter(ev.target.value)} value={nameFilter}
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
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </th>
                    <th scope="col">
                        <input
                            min="0"
                            type="number"
                            id="studentCountFilter"
                            name="studentCountFilter"
                            onChange={ev => setStudentCountFilter(Number(ev.target.value))} value={studentCountFilter}
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                {teachers.map(teacher => filter(teacher, nameFilter, studentCountFilter, genderFilter) && (
                    <tr key={teacher._id} onClick={() => setOpenModal(teacher)}>
                        <td scope="col" align="center">{teacher.name}</td>
                        <td scope="col" align="center">{teacher.gender}</td>
                        <td scope="col" align="center">{teacher.classCount}</td>
                    </tr>
                ))}
            </tbody>
            <ModalTeacher openModal={openModal} setOpenModal={setOpenModal}/>
        </Container>
    )
}

export default TableTeachers