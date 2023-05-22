
type BaseButtonProps = {
    label: string,
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonPrimary = ({clickHandler, label}: BaseButtonProps) => {
    return (
        <button type="button" className="bg-primary py-2 px-4 text-white rounded-full text-sm lg:text-base font-medium" onClick={clickHandler}>{label}</button>
    )
}


export const ButtonDanger = ({clickHandler, label}: BaseButtonProps) => {
    return (
        <button type="button" className="bg-danger py-2 px-4 text-white rounded-full text-sm lg:text-base font-medium" onClick={clickHandler}>{label}</button>
    )
}