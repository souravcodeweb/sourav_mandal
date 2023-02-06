import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Ui/Navbar';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Work from "./Components/Pages/Work";
import Videos from "./Components/Pages/Videos";
import Blogs  from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='work' element={<Work/>}/>
        <Route path='videos' element={<Videos/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
