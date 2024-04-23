import './App.css'
import FrontPage from './assets/pages/FrontPage';
import Login from './assets/pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PainelADM from './assets/pages/PainelADM';

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/front-page/*" element={<FrontPage />}/>
                <Route path="/PainelADM/*" element={<PainelADM />}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
