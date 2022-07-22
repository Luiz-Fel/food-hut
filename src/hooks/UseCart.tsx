import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextData {
    modalIsOpen: boolean;
    openCartModal: () => void;
    closeCartModal: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children } : CartProviderProps) {

    const  [modalIsOpen, setModalIsOpen] = useState(false);





    function openCartModal() {
        setModalIsOpen(true);
        console.log(modalIsOpen)
    }

    function closeCartModal() {
        setModalIsOpen(false);
        console.log("FALSE")
    }

    return (
        <CartContext.Provider value={{modalIsOpen, openCartModal, closeCartModal}}>
            { children }
        </CartContext.Provider>
    )
}


export function useCart() {
    const context = useContext(CartContext);

    return context
}