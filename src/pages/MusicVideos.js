import React from "react";
import { NavLink } from "react-router-dom";

const MusicVideos = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<div className="flex flex-col gap-24 items-center">
					<iframe
						className="w-full sm:w-1/2 md:w-2/3"
						height="315"
						src="https://www.youtube.com/embed/MW1HjTdgFKg"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="w-full sm:w-1/2 md:w-2/3"
						height="315"
						src="https://www.youtube.com/embed/Pp-kVk7flso"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="w-full sm:w-1/2 md:w-2/3"
						height="315"
						src="https://www.youtube.com/embed/008jmjVJgTI"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<iframe
						className="w-full sm:w-1/2 md:w-2/3"
						height="315"
						src="https://www.youtube.com/embed/UwHI_27K4yg"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<NavLink className="underline mt-40" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default MusicVideos;
