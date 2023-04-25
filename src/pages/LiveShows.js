import React from "react";
import { NavLink } from "react-router-dom";

const LiveShows = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<h1 className="text-6xl text-yellow-300 font-black text-right">
					UPCOMING LIVESHOWS
				</h1>
				<div className="my-16">
					<p className="text-3xl text-pink-900 font-black">
						London, O2 Academy Islington 10.05.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.ticketmaster.co.uk/tigerstate-london-10-05-2023/event/3E005E84A2040ACE?irgwc=1&utm_source=296934-Spotify&utm_medium=affiliate&utm_campaign=296934&awtrc=&clickId=zj6VHkXw9xyNR4K0-Lw1QVHwUkAQacTFgVw5Uk0&camefrom=CFC_BUYAT_296934&ircid=7559"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<div className="my-16">
					<p className="text-3xl text-purple-900 font-black">
						Brighton, The Great Escape 12.05.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.ticketweb.uk/event/the-great-escape-festival-2023-various-venues-brighton-tickets/12104035"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<div className="my-16">
					<p className="text-3xl text-indigo-700 font-black">
						Oslo, Øyafestivalen 10.08.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.ticketmaster.no/event/torsdagsbillett-yafestivalen-2023-billetter/703357?clickId=zj6VHkXw9xyNR4K0-Lw1QVHwUkAQaZS9gVw5Uk0&irgwc=1&utm_source=Spotify&utm_medium=affiliate&utm_campaign=296934&utm_content=1220128_8215"
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
