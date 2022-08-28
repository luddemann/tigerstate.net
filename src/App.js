import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Releases from "./pages/Releases";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/releases" element={<Releases />} />
			</Routes>
		</Router>
	);
};

export default App;
