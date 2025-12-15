import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";

import Layout from './pages/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";
import Part3 from "./pages/Part3";
import Part4 from "./pages/Part4";
import Part5 from "./pages/Part5";

export default function App() {
  return(<BrowserRouter>
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="part1" element = {<Part1 />} />
        <Route path="part2" element = {<Part2 />} />
        <Route path="part3" element = {<Part3 />} />
        <Route path="part4" element = {<Part4 />} />
        <Route path="part5" element = {<Part5 />} />
      </Route>
    </Routes>
  </BrowserRouter>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);