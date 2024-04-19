import { ReactNode } from "react";

interface Props {
    url: string;
    children: ReactNode;
}

function Séries(props: Props) {
    return (
        <>
            <div className="APK">
                <img src={props.url}/>
                <div className="Série-name">{props.children}</div>
            </div>
        </>
    )
}

export default Séries;