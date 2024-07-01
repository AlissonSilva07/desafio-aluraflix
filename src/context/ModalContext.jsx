import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    const [idVideoEdit, setIdVideoEdit] = useState(null)

    const handleOpenModal = (id) => {
        setShowModal(true)
        setIdVideoEdit(id)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setIdVideoEdit(null)
    }

    return (
        <ModalContext.Provider
        value={{showModal, handleOpenModal, handleCloseModal, idVideoEdit}}>
            {children}
        </ModalContext.Provider>
    )
}