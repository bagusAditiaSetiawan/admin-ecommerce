type Props  = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    name: string,
    id?: string,
    type?: React.HTMLInputTypeAttribute,
    autoComplete?: string,
    placeHolder?: string,
    value: string | ReadonlyArray<string> | number ,
    isOnly?: boolean,
    isRequired?: boolean,
}

export const FormInput = ({onChange, label, type, name, id, autoComplete, placeHolder, value, isOnly, isRequired}: Props) => {
    return (
        <div>
            <label htmlFor={id} className={isOnly ? 'sr-only' : ''}>
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={isRequired}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder={placeHolder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}