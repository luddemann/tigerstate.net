import React from "react";
import Palett from "../images/palett.png";
import { NavLink } from "react-router-dom";
import ButtonBg from "../images/Orange_Button.png";
import Shadow from "../images/Orange_Button_shadow.png";

const Contact = () => {
	return (
		<div className="bg-blue-bg bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<div
					className={`relative flex text-center items-center justify-center w-2/3`}
				>
					<img
						src={Shadow}
						className="absolute top-8 left-8"
						alt="buttonshadow"
					/>

					<img
						className="w-full relative z-20"
						src={ButtonBg}
						alt="buttonback"
					/>
					<p
						className={` w-full z-30 underline-offset-8 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-7xl`}
					>
						Contact
					</p>
				</div>
				<section className="flex flex-col gap-8 mt-24">
					<div className="flex flex-col md:flex-row gap-4">
						<a
							className="underline underline-offset-8 text-2xl md:text-4xl text-blue-800 font-semibold"
							href="mailto:stateoftiger@gmail.com"
						>
							stateoftiger@gmail.com
						</a>
					</div>
					<img className="block mt-5 mb-8" src={Palett} alt="palett" />
				</section>
				<NavLink className="underline mt-44" to="/" exact="true">
					back home
				</NavLink>
			</div>
		</div>
	);
};

export default Contact;
