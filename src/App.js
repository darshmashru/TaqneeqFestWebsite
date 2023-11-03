// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import Rewind from "./pages/Rewind.js";
import Navbar from "./components/Navbar.js";
// import Preloader from './pages/Preloader';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Workshop from './pages/Workshop';
import Event from './pages/Event';
import Collab from './pages/collab';
import ExecRecruitment from './components/ExecRecruitment.js';
import ExecRecruit from './components/ExecRecruit';

function App()
{
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="rewind" element={<Rewind />} />
                    <Route path="sponsors" element={<Sponsors />} />
                    <Route path="abouttq" element={<About />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="workshops" element={<Workshop />} />
                    <Route path="events" element={<Event />} />
                    <Route path="collab" element={<Collab/>} />
                    {/* <Route path="ExecRecruitment" element={<ExecRecruitment />} /> */}
                    <Route path="/ExecRecruitment" element={<ExecRecruit />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;