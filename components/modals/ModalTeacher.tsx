import { ITeacher } from '../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import BaseModal from './BaseModal'
import { Field, Label, Input, InputSelect, Created } from './styles'

interface Iprops {
    openModal: ITeacher | null
    setOpenModal: Dispatch<SetStateAction<ITeacher | null>>
}

const ModalTeacher: FC<Iprops> = ({ openModal, setOpenModal }) => {
    return (
        <BaseModal
            openModal={openModal}
            setOpenModal={setOpenModal}
        >
            <Field>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" type="text" defaultValue={openModal?.name}/>
            </Field>
            <Field>
                <Label htmlFor="classCount">Turmas</Label>
                <Input id="classCount" name="classCount" type="number" min="0" defaultValue={openModal?.classCount}/>
            </Field>
            <Field>
                <Label htmlFor="gender">Gênero</Label>
                <InputSelect name="gender" id="gender" defaultValue={openModal?.gender}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </InputSelect>
            </Field>
            <Created>Cadastrado em: {openModal?.created.date} as {openModal?.created.hour}</Created>
        </BaseModal>
    )
}

export default ModalTeacher