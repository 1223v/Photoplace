import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import NavBar from './views/NavBar/NavBar';
import NavbarDetail from './views/NavBar/NavbarDetail';
import Footer from './views/Footer/Footer';
import Seoul from './views/AIcontent/Seoul';
import Busan from './views/AIcontent/Busan';
import Drama from './views/AIcontent/Drama';
import Jeju from './views/AIcontent/Jeju';
import Loading from './views/Loading/Loading';
import Mapsearch from './views/Mapsearch/Mapsearch';
import Ranking from './views/Ranking/Ranking';
import Detail from './views/Detail/Detail';
import AImap from './views/AImap/AImap';
import Roadviews from './views/Roadviews/Roadviews';
import SeoulMap from './views/LandingPage/SeoulMap';
import BusanMap from './views/LandingPage/Sections/BusanMap';
import JejuMap from './views/LandingPage/Sections/JejuMap';
import DramaMap from './views/LandingPage/Sections/DramaMap';

function App() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	
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
				<NavbarDetail />
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
					<Route path="/" element={<SeoulMap />} />
					<Route path="/Seoul" element={<Seoul />} />
					<Route path="/Busan" element={<Busan />} />
					<Route path="/Jeju" element={<Jeju />} />
					<Route path="/Drama" element={<Drama />} />
					<Route path="/Mapsearch" element={<Mapsearch />} />
					<Route path="/Ranking" element={<Ranking />} />
					<Route path="/AImap" element={<AImap />} />
					<Route path="/BusanMap" element={<BusanMap />} />
					<Route path="/JejuMap" element={<JejuMap />} />
					<Route path="/DramaMap" element={<DramaMap />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
