// importação do css
import './Myinput.css';
import { ChangeEvent } from 'react';
import { KeyboardEvent } from 'react';

// interface para adicionar propriedades ao componente
interface Props {
    type: string;
    value?: string;
    placeholder?: string;
    bgColor?: string;
    onKeyDown?: (e : KeyboardEvent<HTMLInputElement>) => void;

    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
};

// criação do componente
function MyInput(props: Props) {
    // html do componente sendo definido
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} style={{ backgroundColor: `${props.bgColor}` }} onChange={props.onChange} value={props.value} onKeyDown={props.onKeyDown}/>
        </>
    );
};

// exportação do componente
export default MyInput;