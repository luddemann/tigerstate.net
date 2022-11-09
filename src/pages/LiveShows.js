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
						Oslo, Parkteatret 07.01.2023
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
				<div className="my-16">
					<p className="text-3xl text-orange-900 font-black">
						Stavanger, Tou 13.01.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.linticket.no/page/no/event/15/13301"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<div className="my-16">
					<p className="text-3xl text-green-900 font-black">
						Bergen, Kulturhuset 14.01.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://kulturhusetibergen.ticketco.events/no/nb/e/tigerstate"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<div className="my-16">
					<p className="text-3xl text-indigo-900 font-black">
						Drammen, Union Scene 27.01.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://www.drammenscener.no/union/program/18818-tigerstate/"
						target="_blank"
						rel="noreferrer"
					>
						TICKETS!!!
					</a>
				</div>
				<div className="my-16">
					<p className="text-3xl text-teal-900 font-black">
						Fredrikstad, St. Croix 28.01.2023
					</p>
					<a
						className="underline text-2xl text-blue-800"
						href="https://checkout.ebillett.no/178/events/120008/purchase/setup"
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
