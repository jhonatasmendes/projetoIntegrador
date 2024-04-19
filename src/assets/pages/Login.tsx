import "./Login.css"
import MyInput from "../components/MyInput"
import MyButton from "../components/MyButton"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginFail, setLoginFail] = useState(false);

    const navigate = useNavigate();

    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleOnClick = () => {
        
        if (user === "mendes" && password === "1243") {
            navigate("/PainelADM");
        }
        if (user === "jonas" && password === "1243") {
            navigate("/front-page");
        } else {
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuário ou senha incorreto!");
            setLoginFail(false);
        }
    }

    const handleOnKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleOnClick();
        }
    }

    return (
        <>
            <div className="container">
                <div className="login-area">
                    <MyInput placeholder="Usuario" type='text' onChange={handleUserOnChange} value={loginFail ? "" : user} onKeyDown={handleOnKeyDown}/>
                    <MyInput placeholder="Senha" type='password' onChange={handlePasswordOnChange} value={loginFail ? "" : password} onKeyDown={handleOnKeyDown}/>
                    <MyButton onClick={handleOnClick}>Login</MyButton>
                </div>
                <div className="bottom">
                    <h1>Koffice</h1>
                    <h3>Desenvolvido por: Jhonatas, Mendes.</h3>
                </div>
            </div>
        </>
    )
}

export default Login;