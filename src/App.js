import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/releases" element={<Releases />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
