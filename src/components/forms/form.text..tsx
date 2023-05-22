type Props  = {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
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

export const FormText = ({onChange, label, name, id, autoComplete, placeHolder, value, isOnly, isRequired}: Props) => {
    return (
        <div>
            <label htmlFor={id} className={isOnly ? 'sr-only' : ''}>
                {label}
            </label>
            <textarea
                id={id}
                onChange={onChange}
                name={name}
                autoComplete={autoComplete}
                required={isRequired}
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={placeHolder}
                value={value}
            ></textarea>
        </div>
    )
}