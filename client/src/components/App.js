import React, { useEffect, useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import AIcontent from './views/AIcontent/AIcontent';
import Loading from './views/Loading/Loading';

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
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;