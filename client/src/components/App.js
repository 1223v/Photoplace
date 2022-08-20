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
import Ranking from './views/Ranking/RankingSeoul';
import BusanRanking from './views/Ranking/RankingBusan';
import JejuRanking from './views/Ranking/RankingJeju';
import Detail from './views/Detail/Detail';
import Share from './views/Share/Share';
import AImap from './views/AImap/AImap';
import Roadviews from './views/Roadviews/Roadviews';
import SeoulMap from './views/LandingPage/SeoulMap';
import BusanMap from './views/LandingPage/Sections/BusanMap';
import JejuMap from './views/LandingPage/Sections/JejuMap';
import DramaMap from './views/LandingPage/Sections/DramaMap';
import {ShareContext} from './views/Context/forShareModal';

function App() {
	const [Appear, setAppear] = useState(false);
	const [loading, setLoading] = useState(true);
	const [Num, setNum] = useState(0);
	const [Title, setTitle] = useState("");
	const [Description, setDesc] = useState("");
	const [Img, setImg] = useState(null);
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
			<ShareContext.Provider
			value= {{
				Appear, setAppear, setTitle, setNum, setDesc, setImg
			}}>
				<div>
					<NavbarDetail />
					<div style={{ minHeight: 'calc(100vh - 80px)' }}>
						<Routes>
							<Route path="/Detail/:id" element={<Detail />} />
							<Route path="/Share" element={<Share />} />
							<Route path="/Roadviews" element={<Roadviews />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</ShareContext.Provider>
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
	} else if (url.includes('Share')) {
		return (
			<ShareContext.Provider
			value= {{ Img, Title, Description, Num }}>
				<div>
					<NavbarDetail />
					<div style={{ minHeight: 'calc(100vh - 80px)', align: 'center', valign: 'center'}}>
						<Routes>
							<Route path="/Share" element={<Share />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</ShareContext.Provider>
		)
		
	}

	return (
		<ShareContext.Provider
		value= {{
			Appear,
			setAppear
		}}>
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
						<Route path="/SeoulRanking" element={<Ranking />} />
						<Route path="/BusanRanking" element={<BusanRanking />} />
						<Route path="/JejuRanking" element={<JejuRanking />} />
						<Route path="/AImap" element={<AImap />} />
						<Route path="/BusanMap" element={<BusanMap />} />
						<Route path="/JejuMap" element={<JejuMap />} />
						<Route path="/DramaMap" element={<DramaMap />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</ShareContext.Provider>
	);
}

export default App;
