import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

type Props  = {
    onChange: (value: string) => void,
    label: string,
    name: string,
    id?: string,
    value?: ReactQuill.Value,
    isOnly?: boolean,
}

export const FormQuil = ({onChange, label, id, value, isOnly}: Props) => {
    return (
        <div>
        <label htmlFor={id} className={isOnly ? 'sr-only' : ''}>
            {label}
        </label>
        <ReactQuill 
        onChange={onChange}
        value={value}
        />
    </div>
    )
}