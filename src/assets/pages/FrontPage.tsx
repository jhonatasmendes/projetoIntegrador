import NavBarItem from "../components/NavBarItem";
import "./FrontPage.css";

function FrontPage() {
    return (
        <>
            <div className="content">
                <div className="side-bar">
                    <NavBarItem>1</NavBarItem>
                    <NavBarItem>2</NavBarItem>
                </div>
                <div className="main">
                    <h1>FrontPage</h1>
                </div>
            </div>
        </>
    )
}

export default FrontPage;