export interface ModalBasic {
    title: string,
    isShow: boolean,
    setIsShow: () => void,
    submit: () => void,
    children: JSX.Element,
}