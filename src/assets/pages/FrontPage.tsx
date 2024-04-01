import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";
import Main from "./sub-pages/Main";

function FrontPage() {
    return (
        <>
            <div className="content">
                <div className="side-bar">
                    <NavBarItem>1</NavBarItem>
                    <NavBarItem>2</NavBarItem>
                </div>
                
                <Main/>
            </div>
        </>
    )
}

export default FrontPage;