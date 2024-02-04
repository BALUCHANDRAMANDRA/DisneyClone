
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Header } from './pages/Header';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={< Login />} />
          <Route exact path="/Home" element={< Home />} />
          <Route exact path="/detail/:id" element={< Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
