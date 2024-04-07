import { FC } from "react";
import s from "./Modal.module.css"
import { Scrollbar } from "react-scrollbars-custom";
import Scrollbars from "react-custom-scrollbars-2";

interface ModalContentProps{
    children: any;
    height?: string
    width?: string
};

const ModalContent: FC<ModalContentProps> = (props) => {
    const {children, height, width} = props
    return(
        <Scrollbars style={{width: width || "100%", height: height || 400, maxHeight: "80vh"}}>
            <div className={s.modal_content}>
                {children}
            </div>
        </Scrollbars>
    )
}

export default ModalContent;