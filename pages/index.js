import Head from "next/head";
import { useEffect } from "react";

import MainBanner from "../components/home/MainBanner";
import Testimonials from "../components/home/Testimonials";
import Why from "../components/home/Why";
import Programs from "../components/home/Programs";
import Contact from "../components/home/Contact";
import Transform from "../components/home/Transform";
import Modal from "../components/general/Modal";

import { CarouselContextProvider } from "../contexts/CarouselContext";
import {
	ModalContextProvider,
	useModalContext,
} from "../contexts/ModalContext";
const Home = () => {
	const { isModalVisible, setIsModalVisible } = useModalContext();

	useEffect(() => {
		const isModalClosed =
			localStorage.getItem("modalClosed") === "true" ||
			sessionStorage.getItem("modalClosed") === "true";

		if (!isModalClosed) {
			setIsModalVisible(true);
		}
		return () => {
			setIsModalVisible(false);
		};
	}, [setIsModalVisible]);

	return (
		<div>
			<Head>
				<title>Actitud Ases – Coaching & Lifestyle</title>
			</Head>
			{isModalVisible && <Modal />}
			<MainBanner />
			<Why />
			<Transform />
			<Programs />
			<CarouselContextProvider>
				<Testimonials />
			</CarouselContextProvider>
			<Contact />
			<style jsx>{`
				div {
					width: 100%;
				}
			`}</style>
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
			`}</style>
		</div>
	);
};

const HomeWrapper = () => {
	return (
		<ModalContextProvider>
			<Home />
		</ModalContextProvider>
	);
};

export default HomeWrapper;
