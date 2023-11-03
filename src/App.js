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

function App()
{
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="contactus" element={<ContactUs />} />
                    <Route exact path="rewind" element={<Rewind />} />
                    <Route exact path="sponsors" element={<Sponsors />} />
                    <Route exact path="abouttq" element={<About />} />
                    <Route exact path="schedule" element={<Schedule />} />
                    <Route exact path="workshops" element={<Workshop />} />
                    <Route exact path="events" element={<Event />} />
                    <Route exact path="collab" element={<Collab/>} />

                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
