import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import NavBar from './views/NavBar/NavBar';
import NavBar_Detail from './views/NavBar/NavBar_Detail';
import Footer from './views/Footer/Footer';
import Seoul from './views/AIcontent/Seoul';
import Busan from './views/AIcontent/Busan';
import Jeju from './views/AIcontent/Jeju';
import Loading from './views/Loading/Loading';
import Mapsearch from './views/Mapsearch/Mapsearch';
import Ranking from './views/Ranking/Ranking';
import Detail from './views/Detail/Detail';
import AImap from './views/AImap/AImap';
import Roadviews from './views/Roadviews/Roadviews';

function App() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	useEffect(() => {
		console.log(location);
	}, [location]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return <Loading></Loading>;
	}

	const url = document.URL;

	if (url.includes('Detail')) {
		return (
			<div>
				<NavBar_Detail />
				<div style={{ minHeight: 'calc(100vh - 80px)' }}>
					<Routes>
						<Route path="/Detail/:id" element={<Detail />} />
						<Route path="/Roadviews" element={<Roadviews />} />
					</Routes>
				</div>
				<Footer />
			</div>
		);
	} else if (url.includes('Roadviews')) {
		return (
			<div>
				<div style={{ minHeight: 'calc(100vh - 80px)' }}>
					<Routes>
						<Route path="/Roadviews" element={<Roadviews />} />
					</Routes>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div>
			<NavBar />
			<div style={{ minHeight: 'calc(100vh - 80px)' }}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/Seoul" element={<Seoul />} />
					<Route path="/Busan" element={<Busan />} />
					<Route path="/Jeju" element={<Jeju />} />
					<Route path="/Mapsearch" element={<Mapsearch />} />
					<Route path="/Ranking" element={<Ranking />} />
					<Route path="/AImap" element={<AImap />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
