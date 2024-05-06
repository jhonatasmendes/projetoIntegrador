import { Route, Routes} from "react-router-dom";
import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";
import Filmes from "./sub-pages/Filmes";
import MyButton from "../components/MyButton";
import axios from 'axios';
import { useState } from 'react';

interface Reven {
    id: number
    master: string
};

function FrontPage() {
    const [reven, setReven] = useState<Reven[]>([]);

    const handleGetReven = async () => {
        const res = await axios.get("http://localhost:8080/reven")
        setReven(res.data)
  
        console.log(reven)
    };

    return (
        <>
            <div className="content">
                <div className="side-bar">
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/Canais/"><NavBarItem>Canais</NavBarItem></a>
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/"><NavBarItem>Filmes</NavBarItem></a>
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/S%C3%A9rie/"><NavBarItem>Séries</NavBarItem></a>
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/Jogos/"><NavBarItem>Jogos</NavBarItem></a>
                <a href="https://drive.google.com/drive/u/8/folders/10hQxcG_ongsDND56nKfx4dEJnheYKFI9"><NavBarItem>APK</NavBarItem></a>
                <MyButton onClick={handleGetReven}>Dados</MyButton>
            </div>
                
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="films" element={<Filmes/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default FrontPage;