import Link from "next/link";

const ExperienceVideo = ({ video_link, video_image }) => {
	return (
		<div>
			<Link href={video_link?.url || "/"}>
				<a target="_blank" rel="noreferrer">
					<figure>
						<img
							className="thumbnail"
							src={video_image?.url}
							alt={video_image?.alt}
						/>
						<img
							className="playIcon"
							src="/assets/icons/video-play.svg"
							alt="play"
						/>
					</figure>
				</a>
			</Link>
			<style jsx>{`
				div {
					width: 100%;
					height: 100%;
					border: solid 2px white;
				}

				a {
					width: 100%;
					height: 100%;
					display: block;
				}

				figure {
					position: relative;
					width: 100%;
					height: 100%;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.thumbnail {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}

				.playIcon {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					height: 30%;
				}
			`}</style>
		</div>
	);
};

export default ExperienceVideo;
