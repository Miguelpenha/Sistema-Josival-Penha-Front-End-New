import { IStudent, IClass } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import BaseModal from '../BaseModal'
import { ContainerPhoto, Photo } from './style'
import { Field, Label, Input, InputSelect, Created } from '../styles'

interface Iprops {
    openModal: IStudent | null
    setOpenModal: Dispatch<SetStateAction<IStudent | null>>
    classes: IClass[]
}

const ModalStudent: FC<Iprops> = ({ openModal, setOpenModal, classes }) => {
    return (
        <BaseModal openModal={openModal} setOpenModal={setOpenModal}>
            <ContainerPhoto href={openModal?.photo.url} target="_blank" id="photo">
                <Photo src={openModal?.photo.url}/>
            </ContainerPhoto>
            <Field>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" name="name" id="name" defaultValue={openModal?.name}/>
            </Field>
            <Field>
                <Label htmlFor="gender">Gênero</Label>
                <InputSelect name="genderStudent" id="genderStudent" defaultValue={openModal?.gender}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="birth">Data de nascimento</Label>
                <Input
                    id="birth"
                    type="date"
                    name="birth"
                    defaultValue={`${openModal?.birth.split('/')[2]}-${openModal?.birth.split('/')[1]}-${openModal?.birth.split('/')[0]}`}
                />
            </Field>
            <Field>
                <Label htmlFor="responsible-1">Responsável 1</Label>
                <Input name="responsible-1" id="responsible-1" type="text" defaultValue={openModal?.responsible1}/>
            </Field>
            <Field>
                <Label htmlFor="responsible-2">Responsável 2</Label>
                <Input name="responsible-2" id="responsible-2" type="text" defaultValue={openModal?.responsible2}/>
            </Field>
            <Field>
                <Label htmlFor="telephone">Telefone</Label>
                <Input type="tel" id="telephone" name="telephone" defaultValue={openModal?.telephone}/>
            </Field>
            <Field>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" defaultValue={openModal?.email}/>
            </Field>
            <Field>
                <Label htmlFor="matriculation">Mátricula</Label>
                <Input id="matriculation" name="matriculation" type="text" defaultValue={openModal?.matriculation}/>
            </Field>
            <Field>
                <Label htmlFor="class">Turma</Label>
                <InputSelect name="class" id="class" defaultValue={openModal?.class.name}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    {classes.map(classSelect => 
                        <option
                            key={classSelect._id}
                            value={classSelect.name}
                        >
                            {classSelect.name} ({classSelect.studentCount} alunos)
                        </option>
                    )}
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="teacher">Professora</Label>
                <Input disabled id="teacher" name="teacher" type="text" value={openModal?.teacher.name}/>
            </Field>
            <Field>
                <Label htmlFor="situation">Situação</Label>
                <InputSelect name="situation" id="situation" defaultValue={openModal?.situation}>
                    <option value="Nenhuma selecionada">Nenhuma selecionada</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Não ativo">Não ativo</option>
                </InputSelect>
            </Field>
            <Field>
                <Label htmlFor="observation">Observação</Label>
                <Input id="observation" name="observation" type="text" defaultValue={openModal?.observation}/>
            </Field>
            <Created>Cadastrado em: {openModal?.created.date} as {openModal?.created.hour}</Created>
        </BaseModal>
    )
}

export default ModalStudent