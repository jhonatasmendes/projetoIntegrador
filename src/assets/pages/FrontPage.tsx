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
                <a href="https://drive.google.com/drive/u/8/folders/10hQxcG_ongsDND56nKfx4dEJnheYKFI9"><NavBarItem>APKS</NavBarItem></a>

                    <NavBarItem onClick={main}>Séries</NavBarItem>
                    <NavBarItem onClick={films}>Filmes</NavBarItem>
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