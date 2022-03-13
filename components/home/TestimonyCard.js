const TestimonyCard = ({ main_text, author, program }) => {
	return (
		<div className="card">
			<div className="container">
				<p className="text whiteBackgroundTextBody">{main_text}</p>
				{author && <p className="text whiteBackgroundTextBody">{author}</p>}
				{program && <p className="text whiteBackgroundTextBody">{program}</p>}
			</div>
			<style jsx>{`
				.card {
					position: relative;
					border-radius: 6px;
					width: 100%;
					background: black;
					color: white;
					min-height: 75%;
					padding: 2.5rem;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin: 0 1.5rem;
				}

				.text {
					font-size: 1rem;
					line-height: 1.6em;
					color: var(--legend-text);
				}

				.container {
					position: relative;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					justify-content: space-around;
				}
			`}</style>
		</div>
	);
};

export default TestimonyCard;
