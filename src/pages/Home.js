import React from "react";
import Logo from "../images/logovectorwhite.png";
import Tigerstate from "../images/tigerstate-white.jpeg";
import CD from "../images/CD_releases.png";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import Carl from "../images/CARL.png";

const Home = () => {
	return (
		<div className="bg-blue-bg bg-fixed bg-cover h-full w-full font-inter">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<section className="flex relative flex-row gap-8 items-center justify-between">
					<img src={Logo} alt="Logo" className="w-[50%]" />
					<div className="flex-row gap-4 items-center font-semibold overflow-hidden hidden md:flex">
						<Button
							text={"BIO"}
							size={"200px"}
							textSize={"text-xl"}
							link="/bio"
						/>
						<Button
							text={"MERCH"}
							size={"200px"}
							textSize={"text-xl"}
							link="/merch"
						/>
						<Button
							text={"CONTACT"}
							size={"200px"}
							textSize={"text-xl"}
							link="/contact"
						/>
					</div>
				</section>
				<section className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex flex-col gap-8">
						<div className="flex-row gap-4 items-center font-semibold overflow-hidden flex md:hidden">
							<Button
								text={"BIO"}
								size={"200px"}
								textSize={"text-xl"}
								link="/bio"
							/>
							<Button
								text={"MERCH"}
								size={"200px"}
								textSize={"text-xl"}
								link="/merch"
							/>
							<Button
								text={"CONTACT"}
								size={"200px"}
								textSize={"text-xl"}
								link="/contact"
							/>
						</div>

						<div className="border-[15px] border-yellow-500 rounded-xl relative">
							<div className="absolute -bottom-12 md:-top-12 -left-6 md:-left-12">
								<Button
									text={"new album alert click here!"}
									size={"50px"}
									textSize={"text-lg"}
									link="/musicvideos"
									yell
								/>
							</div>
							<img
								src={Tigerstate}
								className="h-[300px] w-full sm:h-auto object-cover"
								alt="Band"
							/>
						</div>
						<div className="bg-[#E87C99] p-4">
							<p className="text-white tracking-tighter text-lg text-shadow-2xl shadow-black">
								Tigerstate is an Oslo-based collective of musicians and singers
								which was founded in 2020. The core of the band is and eclectic
								gang of young musicians, singers and other creative people, who
								after being in the same circle in the Oslo underground for a
								while decided to join forces on a common project.
							</p>
						</div>
						<div className="text-center relative">
							<NavLink
								className="z-20 text-6xl md:text-[4.5rem] text-shadow-xl shadow-black underline underline-offset-8 font-semibold text-white leading-tight absolute top-[15px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								exact="true"
								to="/releases"
							>
								RELEASES
							</NavLink>
							<NavLink exact="true" to="/releases">
								<img className="z-10" src={CD} alt="CD" />
							</NavLink>
						</div>
					</div>
					<div className="flex flex-col gap-20 pb-5">
						<Button
							text={"hot pix!!!"}
							star
							size={"full"}
							textSize={"text-4xl md:text-6xl"}
							underline="underline"
							shadow={true}
							pl="-mr-6"
							link="/hotpix"
						/>
						<Button
							text={"music videos"}
							size={"full"}
							textSize={"text-4xl md:text-6xl"}
							underline="underline"
							shadow={true}
							pl="-mr-6"
							link="/musicvideos"
						/>
						<Button
							text={"live shows"}
							size={"full"}
							textSize={"text-4xl md:text-6xl"}
							underline="underline"
							shadow={true}
							pl="-mr-6"
							link="/liveshows"
						/>
						<div className="border-[15px] border-yellow-200 relative rounded-xl w-3/4 mb-6 md:mb-0">
							<img src={Carl} className="w-full object-cover" alt="Carl" />
							<p className="absolute bottom-14 left-8 text-white text-4xl font-semibold tracking-wider">
								CARL
							</p>
							<a
								href="https://www.instagram.com/pietro_parmigianini"
								target="_blank"
								rel="noreferrer"
								className="text-black font-semibold underline absolute -bottom-10"
							>
								click for his instagram
							</a>
							<a
								href="https://www.instagram.com/tigerstate"
								target="_blank"
								rel="noreferrer"
								className="text-black font-semibold underline absolute -bottom-16"
							>
								click for our instagram
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
