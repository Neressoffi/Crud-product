import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="contenu">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/add/:id?' element={<AddProduct />} />
                        <Route path='/products/:id' element={<ProductDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;