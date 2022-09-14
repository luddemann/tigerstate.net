import React from "react";
import { NavLink } from "react-router-dom";

const LiveShows = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<h1 className="text-6xl text-orange-600 text-right">
					UPCOMING LIVESHOWS
				</h1>
				<div className="my-16">
					<p className="text-3xl text-black font-black">
						Parkteatret 07.01.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.parkteatret.no/arrangement/tigerstate-2"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<NavLink className="underline mt-40" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default LiveShows;
