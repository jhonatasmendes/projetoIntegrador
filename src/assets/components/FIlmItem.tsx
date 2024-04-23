import { ReactNode } from "react";

interface Props {
    url: string;
    children: ReactNode;
}

function FilmItem(props: Props) {
    return (
        <>
            <div className="img">
                <img src={props.url}/>
                <div className="film-name">{props.children}</div>
            </div>
        </>
    )
}

export default FilmItem;