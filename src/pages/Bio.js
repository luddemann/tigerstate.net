import React from "react";
import ButtonBg from "../images/Orange_Button.png";
import Shadow from "../images/Orange_Button_shadow.png";
import Slanted from "../images/slanted.png";
import Star from "../images/star_white.png";

const Bio = () => {
	return (
		<div className="bg-blue-bg bg-fixed h-full w-full">
			<div className="max-w-6xl min-h-screen m-auto p-6">
				<section className="flex w-full">
					<img src={Slanted} className="w-1/3 h-2/3" alt="tigerstate" />
					<div className="w-2/3">
						<div
							className={`relative flex text-center items-center h-[100px] md:h-[200px] justify-center`}
						>
							<img src={Shadow} className="absolute w-full top-8 z-10" alt="" />
							<img
								src={Star}
								className="absolute w-32 h-32 md:w-48 md:h-48 left-0 top-12 z-30"
								alt=""
							/>
							<img className="w-full relative z-20" src={ButtonBg} alt="" />
							<p
								className={`w-full z-30 underline-offset-8 uppercase absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[5rem] md:text-[15rem]`}
							>
								Bios
							</p>
						</div>
						<div className="text-white text-xl font-semibold mt-32 flex-col gap-7 hidden md:flex">
							<p>
								Tigerstate is an Oslo-based collective of musicians and singers
								which was founded during the grim, early days of the pandemic.
								The core of the band is and eclectic gang of young musicians,
								singers and other creative people, who after being in the same
								circle in the Oslo underground for a while decided to join
								forces on a common project.
							</p>
							<p>
								Their approach to what they do musically is organic and
								democratic, yet completely free. As long as the ideas are good,
								anything goes! From songwriting to the actual playing and
								performing of the tunes, Tigerstate is a collective in every
								sense of the word.
							</p>
							<p>
								After releasing two critically acclaimend EPs in 2021, the band
								is ready to drop their debut album this autumn. They have so far
								enjoyed heavy radio rotation on NRK P3 in Norway (their answer
								to BBC6), and also featured regurarly on several international
								Spotify playlists thus far.
							</p>
							<p>
								Recently Tigerstate has played several showcase festivals and
								headliner club shows in their native Norway, amongst them
								by:Larm and Vill Vill Vest. Live, the band truly shines, with a
								sense of fun and urgency that really captivates an audience.
							</p>
							<p>
								In additio nto all of this, the track "Summer Nights" has been
								the soundtrack of a pan-European advertising campaign for the
								famous drinks brand Martini this summer.
							</p>
							<p>
								So make no mistake about it, Tigerstate are ready to show the
								world outside of Norway what they are capable of. Armed with a
								truly special debut record, it's only a matter of time before
								they do.
							</p>
						</div>
					</div>
				</section>
				<div className="text-white text-xl font-semibold mt-12 flex-col gap-7 flex md:hidden">
					<p>
						Tigerstate is an Oslo-based collective of musicians and singers
						which was founded during the grim, early days of the pandemic. The
						core of the band is and eclectic gang of young musicians, singers
						and other creative people, who after being in the same circle in the
						Oslo underground for a while decided to join forces on a common
						project.
					</p>
					<p>
						Their approach to what they do musically is organic and democratic,
						yet completely free. As long as the ideas are good, anything goes!
						From songwriting to the actual playing and performing of the tunes,
						Tigerstate is a collective in every sense of the word.
					</p>
					<p>
						After releasing two critically acclaimend EPs in 2021, the band is
						ready to drop their debut album this autumn. They have so far
						enjoyed heavy radio rotation on NRK P3 in Norway (their answer to
						BBC6), and also featured regurarly on several international Spotify
						playlists thus far.
					</p>
					<p>
						Recently Tigerstate has played several showcase festivals and
						headliner club shows in their native Norway, amongst them by:Larm
						and Vill Vill Vest. Live, the band truly shines, with a sense of fun
						and urgency that really captivates an audience.
					</p>
					<p>
						In additio nto all of this, the track "Summer Nights" has been the
						soundtrack of a pan-European advertising campaign for the famous
						drinks brand Martini this summer.
					</p>
					<p>
						So make no mistake about it, Tigerstate are ready to show the world
						outside of Norway what they are capable of. Armed with a truly
						special debut record, it's only a matter of time before they do.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Bio;
