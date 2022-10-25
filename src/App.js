import "./App.css";
import Footer from "./Componants/Footer";
import Links from "./Componants/Links";
import Profile from "./Componants/Profile";
function App(){
  return (
    <div className="page">
    <Profile />
    <Links />
    <Footer />
    </div>
  );
}
export default App;