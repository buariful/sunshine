import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Signup from './Pages/Signup';
import RequireAuth from './Pages/RequireAuth';
import Services from './Pages/Services';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={
          <RequireAuth>
            <Services />
          </RequireAuth>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
