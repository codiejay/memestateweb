import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const AboutUsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useAboutUs = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
