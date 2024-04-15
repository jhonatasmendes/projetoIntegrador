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
                    <NavBarItem onClick={main}>Main</NavBarItem>
                    <a href="https://ccnew.online/"><NavBarItem>Painel Trend</NavBarItem></a>
                    <a href="https://ccnew.online/"><NavBarItem>Painel GP</NavBarItem></a>
                    <a href="https://infinityplay.qpanel.top/#/sign-in"><NavBarItem>Painel TF</NavBarItem></a>
                    <a href="https://tf1james.apptftv.workers.dev/0:/App/"><NavBarItem>APKS</NavBarItem></a>

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