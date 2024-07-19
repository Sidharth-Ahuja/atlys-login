import { useEffect, useRef, useState } from "react";
import { lockBody } from "../../utils/helperUtility";
import { formConfig } from "./constants";
import "./LoginModal.scss";

interface Props {
    closeModal: () => void;
}

const LoginModal = (props: Props) => {
    const { closeModal } = props;
    const outerModalRef = useRef<HTMLDivElement | null>(null);
    const { register, login } = formConfig;
    const [currentModalState, setCurrentModalState] = useState<string>(register.id);
    const registerModalState = currentModalState === register.id;

    useEffect(() => {
        lockBody();
        if (outerModalRef.current) {
            outerModalRef.current.addEventListener("click", closeModal);
        }

        return () => {
            if (outerModalRef.current)
                outerModalRef.current.removeEventListener("click", closeModal);
        }
    }, [])

    return <div className="outerModal" ref={outerModalRef}>
        <div className="innerModal" onClick={(e)=>e.stopPropagation()}>
            <div className="subHeading">{formConfig[currentModalState].subHeading}</div>
            <div className="heading">{formConfig[currentModalState].heading}</div>
            <div className="inputs">
                {formConfig[currentModalState].elements.map((element: { name: string, placeholder: string }, index: number) => <div className="inputWrap">
                    <label>{element.name}</label>
                    <input placeholder={element.placeholder} />
                </div>)}
            </div>
            <div className="button">
                {formConfig[currentModalState].btnText}
            </div>
            <div className="switcherText">{formConfig[currentModalState].switcherText} <span onClick={() => setCurrentModalState(registerModalState ? login.id : register.id)}>{registerModalState ? login.id : register.id}</span></div>
        </div>
    </div>
}

export default LoginModal;