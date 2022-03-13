import { RichText } from "prismic-reactjs";

const ProgramBody = (program) => {
	return (
		<section>
			<article>
				<h2 className="whiteBackgroundTitle">{program?.title}</h2>
				<div className="textWrapper">
					{program.body?.map(({ slice_type, primary: content }, index) => {
						switch (slice_type) {
							case "title":
								return (
									<h3 className="whiteBackgroundTitle" key={`title-${index}`}>
										{content.text}
									</h3>
								);
							case "paragraph":
								let listItems = [];
								return content.paragraph_text.map((paragraph, localIndex) => {
									switch (paragraph.type) {
										case "paragraph":
											listItems = [];
											return (
												<div
													className={`paragraph whiteBackgroundTitle ${
														paragraph.direction === "rtl"
															? "textAlignRight"
															: "textAlignLeft"
													}`}
													key={`paragraph-${index}-${localIndex}`}
												>
													<RichText render={[paragraph]} />
												</div>
											);

										case "list-item":
											listItems.push(paragraph);

											if (
												content.paragraph_text[localIndex + 1].type !==
												"list-item"
											) {
												return (
													<div
														className={`list whiteBackgroundTitle ${
															paragraph.direction === "rtl"
																? "textAlignRight"
																: "textAlignLeft"
														}`}
														key={`paragraph-${index}-${localIndex}`}
													>
														<RichText render={listItems} />
													</div>
												);
											}
											break;

										case "o-list-item":
											listItems.push(paragraph);

											if (
												content.paragraph_text[localIndex + 1].type !==
												"o-list-item"
											) {
												return (
													<div
														className={`list whiteBackgroundTitle ${
															paragraph.direction === "rtl"
																? "textAlignRight"
																: "textAlignLeft"
														}`}
														key={`paragraph-${index}-${localIndex}`}
													>
														<RichText render={listItems} />
													</div>
												);
											}
											break;
									}
								});
							case "image":
								return (
									<figure
										key={`image-${index}`}
										className={`alignImage${content.align}`}
									>
										<img src={content.image.url} alt={content.image.alt} />
									</figure>
								);
							default:
								break;
						}
					})}
				</div>
			</article>
			<style jsx>{`
				section {
					background: var(--light-grey-background);
				}

				article {
					display: flex;
					flex-direction: column;
					gap: 8vh;
					padding: 8vh 0;
				}

				h2 {
					text-align: center;
					color: var(--hover-button-red);
					font-size: 2.5rem;
				}

				.textWrapper {
					display: flex;
					flex-direction: column;
					gap: 4vh;
				}

				h3 {
					width: 100%;
					color: var(--hover-button-red);
					font-size: 1.2rem;
				}

				.paragraph {
					width: 100%;
					font-size: 1rem;
					font-weight: 400;
				}

				.textAlignRight {
					text-align: right;
				}

				.textAlignLeft {
					text-align: left;
				}

				figure {
					height: 20rem;
					display: flex;
					align-items: center;
				}

				img {
					height: 100%;
					width: 100%
					object-fit: contain;
				}

				.alignImageLeft {
					justify-content: flex-start
				}

				.alignImageCenter {
					justify-content: center
				}

				.alignImageRight {
					justify-content: flex-end
				}

				.list {
					width: 100%;
					font-size: 1rem;
					font-weight: 400;
				}
			`}</style>
			<style jsx global>{`
				.list li {
					list-style: unset;
					margin-left: 1.2rem;
					line-height: 2em;
				}
			`}</style>
		</section>
	);
};

export default ProgramBody;
