import { FC } from "react";
import s from "./Modal.module.css"
import {motion} from "framer-motion"
import CloseIcon from "@assets/icons/close_24px.svg"
import { Button } from "../../shared/Button";


interface ModalProps{
    show: boolean;
    setShow: any;
    name: string;
    children: any;
};

const Modal: FC<ModalProps> = (props) => {
   const {children, show, setShow, name} = props
    const showBackdrop = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
        duration: 0.4,
        damping: 25,
        stiffness: 500,
        },
    },
    exit: {
        x: "100vh",
        opacity: 0,
    },
    };
    
    return(
        <motion.div
        variants={showBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={s.aside_wrapper}
        onClick={() => {setShow(!show)}}>
            <div className={s.aside_body} onClick={(e) => {e.stopPropagation()}}>
                <div className={s.modal_header}>
                    <p className={s.modal_name}>{name}</p>
                    <Button iconOnly theme="border" onClick={() => setShow(false)} ><img src={CloseIcon} /></Button>
                </div>
                {children}
            </div>
        </motion.div>
    )
} 

export default Modal;