import { ReactNode } from "react";
import "./NavBarItem.css";

interface Props {
    children: ReactNode;
    onClick?: () => void;
}

function NavBarItem (props: Props) {
    return (
        <>
            <button className="nav-item" onClick={props.onClick}>{props.children}</button>
        </>
    );
}

export default NavBarItem;