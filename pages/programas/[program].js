import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

import ConsultSection from "../../components/program/ConsultSection";
import ProgramBanner from "../../components/program/ProgramBanner";
import ProgramBody from "../../components/program/ProgramBody";

import Client from "../../utils/prismicHelpers";

const ProgramsPage = () => {
	const [currentProgram, setCurrentProgram] = useState({});

	const router = useRouter();
	const { program } = router.query;

	useEffect(() => {
		const getProgram = async (programToGet) => {
			const response = await Client().getByUID("program", programToGet);

			setCurrentProgram(response?.data);
		};

		getProgram(program);
	}, [program]);

	return (
		<div className="container">
			<Head>
				<title>
					Actitud Ases
					{currentProgram?.title ? ` - ${currentProgram?.title}` : ""}
				</title>
			</Head>
			<div className="headerBackground"></div>
			<ProgramBanner {...currentProgram} />
			<ProgramBody {...currentProgram} />
			<ConsultSection
				title={currentProgram?.title}
				modality={currentProgram?.modality}
				duration={currentProgram?.duration}
			/>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
				}

				.headerBackground {
					background: black;
					width: 100vw;
					height: 7vh;
					position: absolute;
					top: 0;
					z-index: 3;
				}
			`}</style>
		</div>
	);
};

export default ProgramsPage;
