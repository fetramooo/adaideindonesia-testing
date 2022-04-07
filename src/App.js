import './App.css'
import Home from './View/Home.js';
import DonasiDetail from './View/DonasiDetail.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/donasidetail" element={<DonasiDetail/>} />
      </Routes>
    </Router>
  )
}

export default App;
