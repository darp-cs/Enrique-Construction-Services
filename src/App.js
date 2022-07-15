import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Services from './Containers/Services/Services';
import Contact from './Containers/Contact/Contact';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/services" element = {<Services/>}/>
          <Route exact path = "/contact" element = {<Contact/>}/>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
