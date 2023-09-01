import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';
import NewUser from './Pages/NewUser';
import Shubham from './Pages/Shubham';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/homepage' element={<NewUser />} />
                <Route path='/ishubham' element={<Shubham />} />
                <Route exact path='/' element={<Homepage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}
export default App;
