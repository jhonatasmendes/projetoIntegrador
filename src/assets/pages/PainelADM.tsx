import { Route, Routes, useNavigate } from "react-router-dom";
import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";
import Filmes from "./sub-pages/Filmes";

function FrontPage() {
    const navigate = useNavigate();

    

    return (
        <>
            <div className="content">
                <div className="side-bar">
                    <a href="https://ccnew.online/"><NavBarItem>Painel Trend</NavBarItem></a>
                    <a href="https://ccnew.online/"><NavBarItem>Painel GP</NavBarItem></a>
                    <a href="https://lbtf.online/xtream/"><NavBarItem>Painel M & J</NavBarItem></a>
                    <a href="https://infinityplay.qpanel.top/#/sign-in"><NavBarItem>Painel Infinity</NavBarItem></a>
                    <a href="https://drive.google.com/drive/u/8/folders/10hQxcG_ongsDND56nKfx4dEJnheYKFI9"><NavBarItem>APKS</NavBarItem></a>


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