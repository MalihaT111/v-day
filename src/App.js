import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Quiz } from './Quiz/Quiz';
import { Coupon } from './Coupon/Coupon';
import { Gallery } from './Gallery/Gallery';
import { Cursor } from './Cursor/Cursor';

function App() {
return (
	<Router> 
	<div className="App" >
		<Cursor />
		<Navbar />
		<div className="content">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Quiz" element={<Quiz />} />
				<Route path="/Coupon" element={<Coupon />} />
				<Route path="/Gallery" element={<Gallery />} />
			</Routes>
		</div>
	</div>
	</Router>
	);
}

export default App;
