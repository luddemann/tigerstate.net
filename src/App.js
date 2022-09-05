import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";
import MusicVideos from "./pages/MusicVideos";
import LiveShows from "./pages/LiveShows";
import Merch from "./pages/Merch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/releases" element={<Releases />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/musicvideos" element={<MusicVideos />} />
        <Route exact path="/liveshows" element={<LiveShows />} />
        <Route exact path="/merch" element={<Merch />} />
      </Routes>
    </Router>
  );
};

export default App;
