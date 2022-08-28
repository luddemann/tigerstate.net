import React from "react";
import CD from "../images/CD_releases.png";
import Heartbeats from "../images/heartbeats_cover.png";
import Bedtime from "../images/trippy_cover_gif.gif";
import WhoseRules from "../images/whoserules.png";
import Spotify from "../images/Spotify_Icon_RGB_Green.png";
import { NavLink } from "react-router-dom";

const Releases = () => {
	return (
		<div className="bg-blue-bg-releases bg-fixed h-full w-full">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<section className="grid grid-cols-1 md:grid-cols-2 gap-24">
					<div>
						<div className="text-center relative w-80 pb-24">
							<p className="z-20 text-4xl md:text-7xl text-shadow-xl shadow-black underline underline-offset-8 font-semibold text-white leading-tight absolute top-[15px] left-3/4 transform -translate-x-1/2 -translate-y-1/2">
								RELEASES
							</p>
							<img className="z-10" src={CD} alt="CD" />
						</div>
						<a
							href="https://open.spotify.com/album/0ORKCvap06oVArrFfw88t8?si=XPTCxl8BQXyI8SQVdAVNzg"
							target="_blank"
						>
							<img src={Bedtime} className="w-3/4" alt="" />
						</a>
					</div>
					<div className="pt-24">
						<a
							href="https://open.spotify.com/album/1ii3UbL5AnTBatU4vVXivL?si=s6mxSvHTSMqqf-OkNBQ6bw"
							target="_blank"
						>
							<img src={Heartbeats} className="shadow-2xl" alt="" />
						</a>
						<a
							href="https://open.spotify.com/album/2NBuUIbtamPbzALXPMpPAE?si=cP_8f15SSyCDDPrrtjPrSw"
							target="_blank"
						>
							<img src={WhoseRules} className="mt-32 md:-ml-14 w-2/3" alt="" />
						</a>
					</div>
				</section>
				<section className="flex justify-between items-center mt-8">
					<NavLink className="underline" to="/" exact="true">
						back home
					</NavLink>
					<a
						href="https://open.spotify.com/artist/5IASPTbco70KYmxQwSg8E1?si=vj9O43JmQ4K6tBT3BSJqig"
						target="_blank"
					>
						<img className="w-16" src={Spotify} alt="" />
					</a>
				</section>
			</div>
		</div>
	);
};

export default Releases;
