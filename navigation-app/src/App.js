import Navigation from "./components/Navigation.js";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Home from "./components/page/Home.js";
import About from "./components/page/About.js";
import Product from "./components/page/Product.js";
import Contact from "./components/page/Contact.js";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route  path="/" element={<Home/>} exact/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/product" element={<Product/>}/>
          <Route  path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
