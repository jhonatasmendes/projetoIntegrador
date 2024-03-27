import './App.css'
import FrontPage from './assets/pages/FrontPage';
import Login from './assets/pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/front-page" element={<FrontPage />}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
