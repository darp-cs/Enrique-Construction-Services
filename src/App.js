import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import Home from './Containers/Home/Home';
// import Services from './Containers/Services/Services';
import Contact from './Containers/Contact/Contact';
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route exact path = "/Services" element = {Services}/> */}
          <Route exact path = "/Contact" element = {<Contact/>}/>
          <Route path = "/" element = {<Home/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
