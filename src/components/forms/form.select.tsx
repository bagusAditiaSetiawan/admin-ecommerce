import React from 'react'
import Select from 'react-select'
import { ActionMeta, SingleValue, PropsValue, MultiValue} from 'react-select'

export type Option = {
    value: number,
    label: string,
}

interface Props {
    label: string,
    name: string,
    options: Option[],
    id?: string,
    type?: React.HTMLInputTypeAttribute,
    autoComplete?: string,
    placeHolder?: string,
    value?: PropsValue<Option>,
    isOnly?: boolean,
    isRequired?: boolean,
    onInputChange?: (e: string) => void,
}

interface SingleProps extends Props{
    onChange?: (value: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void;
}

interface MultiProps extends Props{
    onChange?: (value: MultiValue<Option>, actionMeta: ActionMeta<Option>) => void;
}
export const FormSelectSingle = ({options, label, value, onChange, onInputChange}: SingleProps) => {    
    return (
        <div>
            <label>{label}</label>
            <Select options={options} onChange={onChange} value={value} onInputChange={onInputChange} />
        </div>
    )
}

export const FormSelectMultiple = ({options, label, value, onChange, onInputChange}: MultiProps) => {    
    return (
        <div>
            <label>{label}</label>
            <Select options={options} onChange={onChange} value={value} onInputChange={onInputChange} isMulti />
        </div>
    )
}