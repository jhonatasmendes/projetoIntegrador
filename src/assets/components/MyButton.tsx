import { ReactNode } from "react";
import "./MyButton.css"

interface Props {
    children: ReactNode;
    onClick: () => void;
};

function MyButton({children, onClick}: Props) {
    return (
        <>
            <button className="button" onClick={onClick}>{children}</button>
        </>
    );
};

export default MyButton;