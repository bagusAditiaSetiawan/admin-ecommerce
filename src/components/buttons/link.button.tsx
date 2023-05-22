import { Link } from "react-router-dom"
import { Colors, ColorsHover } from "../type/variant.type"

type LinkButtonProps = {
    link: string,
    label: string,
}

export const LinkButtonPrimary = ({link, label}: LinkButtonProps) => {
    return (
        <Link to={link} className={`bg-primary hover:bg-primary_hover py-2 px-4 text-base rounded-full text-white hover:text-primary hover:bg-white hover:border`}>{label}</Link>
    )
}