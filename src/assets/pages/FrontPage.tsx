import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";

function FrontPage() {
    return (
        <>
            <div className="content">
                <div className="side-bar">
                    <a href="https://tf1james.apptftv.workers.dev/0:/App/"><NavBarItem>Painel ADM</NavBarItem></a>
                    <a href="https://ccnew.online/"><NavBarItem>Painel Trend</NavBarItem></a>
                    <a href="https://ccnew.online/"><NavBarItem>Painel GP</NavBarItem></a>
                    <a href="https://infinityplay.qpanel.top/#/sign-in"><NavBarItem>Painel TF</NavBarItem></a>
                    <a href="https://tf1james.apptftv.workers.dev/0:/App/"><NavBarItem>APKS</NavBarItem></a>
                </div>
                
            <div>
                </div>
                
                <Main/>
            </div>
        </>
    )
}

export default FrontPage;