import { useEffect, useRef } from "react";
import "./LoginModal.scss";

interface Props {
    closeModal: () => void;
}

const LoginModal = (props: Props) => {
    const {closeModal} = props;
    const outerModalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(outerModalRef.current)
        outerModalRef.current.addEventListener("click",closeModal);

        return () => {
            if(outerModalRef.current)
            outerModalRef.current.removeEventListener("click",closeModal);}
    },[])

    return <div className="outerModal" ref={outerModalRef}>
        <div className="innerModal">
            hello
        </div>
    </div>
}

export default LoginModal;