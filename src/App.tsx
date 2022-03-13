import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";



function App() {



  return (
    <>
        <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={<TodoPage />}/>
        <Route path='/todos' element={<TodoPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='*' element={<TodoPage />}/>
        </Routes>
      </div>
      </>
  );
}

export default App;
