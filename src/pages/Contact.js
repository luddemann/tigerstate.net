import React from "react";
import Button from "../components/Button";
import Palett from "../images/palett.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
	return (
		<div className="bg-blue-bg bg-fixed h-full w-full">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<Button
					text={"Contact"}
					size={"50%"}
					textSize={"text-6xl"}
					underline=""
					shadow={true}
					pl="-mr-6"
				/>
				<section className="text-center m-auto mt-56">
					<a
						className="underline underline-offset-8 text-2xl md:text-6xl font-semibold"
						href=""
					>
						stateoftiger@gmail.com
					</a>
					<img className="block m-auto mt-5 mb-52" src={Palett} alt="" />
				</section>
				<NavLink className="underline mt-44" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default Contact;
