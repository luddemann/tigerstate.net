import React from "react";
import { NavLink } from "react-router-dom";

const LiveShows = () => {
  return (
    <div className="bg-blue-bg-releases bg-fixed h-full w-full">
      <div className="max-w-6xl min-h-screen m-auto p-6">
        <h1 className="text-9xl text-orange-600">COMING SOON</h1>
        <NavLink className="underline mt-40" to="/" exact="true">
          back home
        </NavLink>
      </div>
    </div>
  );
};

export default LiveShows;
