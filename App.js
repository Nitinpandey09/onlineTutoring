import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Videos from "./components/Videos";


function App() {
  return(
    <Router>
  <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/videos" element={<Videos />}/>
      <Route path="/upload" element={<Upload />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    <Footer/>
    </Router>
  );
  
}

export default App;
