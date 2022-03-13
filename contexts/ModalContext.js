import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const useModalContext = () => {
	return useContext(ModalContext);
};

export const ModalContextProvider = ({ children }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalClass, setModalClass] = useState("modal");

	const toggleIsModalVisible = () => {
		if (isModalVisible) {
			setModalClass("modal");
			setTimeout(() => {
				setIsModalVisible(false);
			}, 300);
		} else {
			setIsModalVisible(true);
			setModalClass("modal modal--visible");
		}
	};

	return (
		<ModalContext.Provider
			value={{
				isModalVisible,
				setIsModalVisible,
				modalClass,
				setModalClass,
				toggleIsModalVisible,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
