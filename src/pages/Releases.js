import React from "react";
import CD from "../images/CD_releases.png";
import Heartbeats from "../images/heartbeats_cover.png";
import Bedtime from "../images/trippy_cover_gif.gif";
import WhoseRules from "../images/whoserules.png";
import { NavLink } from "react-router-dom";

const Releases = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed h-full w-full">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<section className="grid grid-cols-1 md:grid-cols-2 gap-24">
					<div>
						<div className="text-center relative w-80 pb-24">
							<p className="z-20 text-[4.5rem] text-shadow-xl shadow-black underline underline-offset-8 font-semibold text-white leading-tight absolute top-[15px] left-3/4 transform -translate-x-1/2 -translate-y-1/2">
								RELEASES
							</p>
							<img className="z-10" src={CD} alt="CD" />
						</div>
						<img src={Bedtime} className="w-3/4" alt="" />
					</div>
					<div className="pt-24">
						<img src={Heartbeats} className="shadow-2xl" alt="" />
						<img src={WhoseRules} className="mt-32 md:-ml-14 w-2/3" alt="" />
					</div>
				</section>
				<NavLink className="underline" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default Releases;
