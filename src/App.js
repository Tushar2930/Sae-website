import {Routes,Route} from "react-router-dom";

import './App.css';

import v1 from './images/Vector (1).png';
import v2 from './images/Vector.png';
import w211 from './images/WhatsApp Image 2022-10-07 at 2.11.png';
import w212 from './images/WhatsApp Image 2022-10-07 at 2.12.png';
import w223 from './images/WhatsApp Image 2022-10-07 at 2.23.png';
import w447 from './images/WhatsApp Image 2022-10-07 at 4.47.png';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Gallery from "./Components/Gallery/Gallery";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Resources from "./Components/Resources/Resources";
import Form from "./Components/InputForm/Form";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/blogs" element={<Blog/>} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/resources" element={<Resources/>} />
      <Route exact path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
