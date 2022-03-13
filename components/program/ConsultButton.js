const ConsultButton = () => {
	return (
		<button className="buttonFont">
			<span>Consultá </span>
			<img src="/assets/icons/whatsapp-icon.svg" alt="whatsapp" />
			<style jsx>{`
				button {
					display: flex;
					width: 50%;
					justify-content: space-evenly;
					align-items: center;
				}

				button: hover {
					background: var(--hover-button-red);
				}
				img {
					height: 80%;
					width: 15%;
					object-fit: contain;
				}
			`}</style>
		</button>
	);
};

export default ConsultButton;
