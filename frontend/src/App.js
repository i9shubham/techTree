import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NewUser from './Pages/NewUser';
// import Shubham from './Pages/Shubham';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';
import UserTree from './Pages/UserTree';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route path='/homepage' element={<NewUser />} />
                <Route path='/*' element={<UserTree />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </>
    );
}
export default App;
