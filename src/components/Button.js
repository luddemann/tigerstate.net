import React from "react";
import { NavLink } from "react-router-dom";
import ButtonBg from "../images/Orange_Button.png";
import Shadow from "../images/Orange_Button_shadow.png";
import RainbowStar from "../images/rainbowstar.png";
import Yell from "../images/yellbubble1.png";

const Button = ({
  text,
  size,
  underline,
  textSize,
  animation,
  shadow,
  link,
  star,
  yell,
}) => {
  return (
    <div
      className={`relative font-inter flex text-center items-center justify-center w-[${size}]`}
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
      {yell ? (
        <a
          href="https://open.spotify.com/album/3qxlqSWXF4GXip7qAxTiay?si=wrxzYa4tRn6ak2dj8kN5Hw"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <img
            className={`${yell ? "w-48" : "w-full"} relative z-20`}
            src={yell ? Yell : ButtonBg}
            alt=""
          />
          <p
            className={`${underline} animate-${animation} w-full z-30 font-md underline-offset-8 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              yell ? "text-shadow-2xl shadow-black text-white" : "text-white"
            } ${textSize}`}
          >
            {text}
          </p>
        </a>
      ) : (
        <NavLink className="w-full" exact="true" disabled to={`${link}`}>
          <img
            className={`${yell ? "w-48" : "w-full"} relative z-20`}
            src={yell ? Yell : ButtonBg}
            alt=""
          />
          <p
            className={`${underline} animate-${animation} w-full z-30 font-md underline-offset-8 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              yell ? "text-shadow-2xl shadow-black text-white" : "text-white"
            } ${textSize}`}
          >
            {text}
          </p>
        </NavLink>
      )}
    </div>
  );
};

export default Button;
