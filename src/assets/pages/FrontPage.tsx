import { Route, Routes, useNavigate } from "react-router-dom";
import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";
import Filmes from "./sub-pages/Filmes";

function FrontPage() {
    const navigate = useNavigate();

    const main = () => {
        navigate("")
    }

    const films = () => {
        navigate("films")
    }

    return (
        <>
            <div className="content">
                <div className="side-bar">
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/Canais/"><NavBarItem>Canais</NavBarItem></a>
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/"><NavBarItem>Filmes</NavBarItem></a>
                <a href="https://paineltftv.projetojmmidias.workers.dev/0:/S%C3%A9rie/"><NavBarItem>Séries</NavBarItem></a>
                <a href="https://drive.google.com/drive/u/4/folders/1GcgbLHWnQNs_4ogYdaBU3bgDn78pRwea"><NavBarItem>Jogos</NavBarItem></a>
                <a href="https://drive.google.com/drive/u/8/folders/10hQxcG_ongsDND56nKfx4dEJnheYKFI9"><NavBarItem>APK</NavBarItem></a>
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