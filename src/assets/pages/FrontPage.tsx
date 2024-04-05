import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";
import { Link } from 'react-router-dom';
function FrontPage() {
    return (
        <>
            <div className="content">
                <div className="side-bar">
                    <NavBarItem> <Link to="https://tf1james.apptftv.workers.dev/0:/App/">Painel ADM</Link></NavBarItem>
                    <NavBarItem> <Link to="https://ccnew.online/">Painel Trend</Link></NavBarItem>
                    <NavBarItem><Link to="https://ccnew.online/">Painel GP</Link></NavBarItem>
                    <NavBarItem><Link to="https://infinityplay.qpanel.top/#/sign-in">Painel TF</Link></NavBarItem>
                    <NavBarItem><Link to="https://tf1james.apptftv.workers.dev/0:/App/">APKS</Link></NavBarItem>
                </div>
                
            <div>
                </div>
                
                <Main/>
            </div>
        </>
    )
}

export default FrontPage;