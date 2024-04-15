import FilmItem from "../../components/FIlmItem";
import "./Filmes.css"

function Filmes() {
    return(
        <>
            <div className="filmes">
                <FilmItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61Tx96ROgXiLJo_nTz_wXlw1MOPianZ5cJhYhFfX69A&s">Filme 1</FilmItem>
                <FilmItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg0V3CIqUSpftS61mcrmHkPtPOT3k2GSanQuI461Ijg&s">Filme 2</FilmItem>
            </div>
        </>
    );
};

export default Filmes;