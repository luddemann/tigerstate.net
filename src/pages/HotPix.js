import React from "react";
import { NavLink } from "react-router-dom";
import Hot from "../images/hot.png";
import Hot2 from "../images/hot1.png";
import Hot3 from "../images/hot2.png";
import Hot4 from "../images/hot3.png";
import Hot5 from "../images/hot4.png";

const LiveShows = () => {
	return (
		<div className="bg-blue-bg bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<h1 className="text-6xl underline text-white mb-12 text-right">
					HOT PIX
				</h1>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-12">
					<img src={Hot} alt="hotpic" className="" />
					<img src={Hot5} alt="hotpic" className="" />
					<img src={Hot2} alt="hotpic" className="" />
					<img src={Hot3} alt="hotpic" className="" />
					<img src={Hot4} alt="hotpic" className="" />
				</section>
				<NavLink className="underline" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default LiveShows;
