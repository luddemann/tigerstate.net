import React from "react";
import { NavLink } from "react-router-dom";

const LiveShows = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<h1 className="text-6xl text-pink-600">COMING SOON</h1>
				<NavLink className="underline mt-40" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default LiveShows;
