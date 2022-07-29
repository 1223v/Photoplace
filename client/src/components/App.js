import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import Seoul from './views/AIcontent/Seoul';
import Busan from './views/AIcontent/Busan';
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
					<Route path="/Seoul" element={<Seoul />} />
					<Route path="/Busan" element={<Busan />} />
					<Route path="/Mapsearch" element={<Mapsearch />} />
					<Route path="/Ranking" element={<Ranking />} />
					<Route path="/AImap" element={<AImap />} />
					<Route path="/Detail/:id" element={<Detail />} />
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