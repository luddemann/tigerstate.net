import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/releases" element={<Releases />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/bio" element={<Bio />} />
			</Routes>
		</Router>
	);
};

export default App;
