import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Users from "./components/Users";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="users" element={<Users />}/>
      </Routes>
    </>
  );
}

export default App;
