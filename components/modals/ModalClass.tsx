import { IClass, ITeacher } from '../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import BaseModal from './BaseModal'
import { Field, Label, Input, InputSelect, Created } from './styles'

interface Iprops {
    openModal: IClass | null
    setOpenModal: Dispatch<SetStateAction<IClass | null>>
    teachers: ITeacher[]
}

const ModalClass: FC<Iprops> = ({ openModal, setOpenModal, teachers }) => {
    return (
        <BaseModal openModal={openModal} setOpenModal={setOpenModal}>
            <Field>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" name="name" id="name" defaultValue={openModal?.name}/>
            </Field>
            <Field>
                <Label htmlFor="grade">Série</Label>
                <InputSelect name="grade" id="grade" defaultValue={openModal?.grade}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    <option value="1° ano">1° ano</option>
                    <option value="2° ano">2° ano</option>
                    <option value="3° ano">3° ano</option>
                    <option value="4° ano">4° ano</option>
                    <option value="5° ano">5° ano</option>
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="shift">Turno</Label>
                <InputSelect name="shift" id="shift" defaultValue={openModal?.shift}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="teacher">Professora</Label>
                <InputSelect name="teacher" id="teacher" defaultValue={openModal?.teacher.name}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    {teachers.map(teacher => 
                        <option key={teacher._id} value={teacher.name}>{teacher.name} ({teacher.classCount} turmas)</option>
                    )}
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="studentsCount">Quantidade de alunos</Label>
                <Input name="studentsCount" id="studentsCount" type="number" min="0" defaultValue={openModal?.studentCount}/>
            </Field>
            <Created>Cadastrado em: {openModal?.created.date} as {openModal?.created.hour}</Created>
        </BaseModal>
    )
}

export default ModalClass