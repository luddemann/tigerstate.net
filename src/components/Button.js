import React from "react";
import { NavLink } from "react-router-dom";
import ButtonBg from "../images/Orange_Button.png";
import Shadow from "../images/Orange_Button_shadow.png";
import RainbowStar from "../images/rainbowstar.png";

const Button = ({
	text,
	size,
	underline,
	textSize,
	animation,
	shadow,
	link,
	star,
}) => {
	return (
		<div
			className={`relative hover:animate-${animation} flex text-center items-center justify-center w-[${size}]`}
		>
			{shadow && (
				<img src={Shadow} className="absolute right-6 top-6 " alt="" />
			)}
			{star && (
				<img
					src={RainbowStar}
					alt="rainbow star"
					className="w-16 h-16 md:w-32 md:h-32 absolute right-0 -top-2 md:-top-10 z-40"
				/>
			)}
			<NavLink className="w-full" exact="true" disabled to={`${link}`}>
				<img className="w-full relative z-20" src={ButtonBg} alt="" />
				<p
					className={`${underline} w-full z-30 underline-offset-8 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${textSize}`}
				>
					{text}
				</p>
			</NavLink>
		</div>
	);
};

export default Button;
