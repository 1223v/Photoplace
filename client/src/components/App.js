import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import AIcontent from './views/AIcontent/AIcontent';
import Loading from './views/Loading/Loading';
import Mapsearch from './views/Mapsearch/Mapsearch';
import Ranking from './views/Ranking/Ranking';
import Detail from './views/Detail/Detail';
import AImap from './views/AImap/AImap';
function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return <Loading></Loading>;
	}
	return (
		<div>
			<NavBar />
			<div style={{ minHeight: 'calc(100vh - 80px)' }}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/AIcontent" element={<AIcontent />} />
					<Route path="/Mapsearch" element={<Mapsearch />} />
					<Route path="/Ranking" element={<Ranking />} />
					<Route path="/AImap" element={<AImap />} />
					<Route path="/Detail" element={<Detail />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
/*
//param 사용
<Route exact path="/Detail/:id" element={<Detail />} />
*/