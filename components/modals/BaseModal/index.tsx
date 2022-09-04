import { Dispatch, SetStateAction, FC, useEffect } from 'react'
import { Modal, IconBack } from './style'

interface Iprops {
    openModal: any | null
    setOpenModal: Dispatch<SetStateAction<any | null>>
}

const BaseModal: FC<Iprops> = ({ openModal, setOpenModal, children, ...props }) => {
    useEffect(() => {
        document.body.style.overflow = openModal ? 'hidden' : 'unset'
    }, [openModal])
    
    return (
        <Modal
            {...props}
            ariaHideApp={false}
            isOpen={openModal ? true : false}
            onRequestClose={() => setOpenModal(null)}
            style={{ overlay: { display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
        >
            <div>
                <IconBack xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" onClick={() => setOpenModal(null)}>
                    <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
                </IconBack>
            </div>
            {openModal && children}
        </Modal>
    )
}

export default BaseModal