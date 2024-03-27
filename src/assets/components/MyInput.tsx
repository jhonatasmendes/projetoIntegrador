// importação do css
import './Myinput.css';
import { ChangeEvent } from 'react';

// interface para adicionar propriedades ao componente
interface Props {
    type: string;
    value?: string;
    placeholder?: string;
    bgColor?: string;

    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
};

// criação do componente
function MyInput(props: Props) {
    // html do componente sendo definido
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} style={{ backgroundColor: `${props.bgColor}` }} onChange={props.onChange} value={props.value}/>
        </>
    );
};

// exportação do componente
export default MyInput;