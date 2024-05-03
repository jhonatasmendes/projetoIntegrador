import './App.css'
import FrontPage from './assets/pages/FrontPage';
import Login from './assets/pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PainelADM from './assets/pages/PainelADM';
import axios from 'axios';
import { useState } from 'react';

interface Reven {
  id: number
  master: string
};

function App() {
  const [reven, setReven] = useState<Reven[]>([]);

  const handleGetReven = async () => {
    const res = await axios.get("http://localhost:8080/reven")

    setReven(res.data)
  };

  window.onload = handleGetReven;

  console.log(reven)

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
