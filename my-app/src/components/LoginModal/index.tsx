import { useEffect, useRef, useState } from "react";
import { lockBody } from "../../utils/helperUtility";
import { formConfig, InputElementType, ModalType } from "./constants";
import "./LoginModal.scss";
import closeButton from "./assets/closeButton.svg";

interface Props {
    closeModal: () => void;
}

const LoginModal = (props: Props) => {
    const { closeModal } = props;
    const outerModalRef = useRef<HTMLDivElement | null>(null);
    const { register, login } = formConfig;
    const [currentModalState, setCurrentModalState] = useState<ModalType>(register.id as ModalType);
    const [revealPassword, setRevealPassword] = useState<boolean>(false);
    const registerModalState = currentModalState === register.id;

    useEffect(() => {
        lockBody();
    }, [])

    const closeLoginModalWithAnimation = () => {
        outerModalRef.current?.classList.add("fadeOut");
        setTimeout(closeModal, 500);
    }

    return <div className="outerModal fadeIn" ref={outerModalRef}>
        <div className="coverBackground" onClick={closeLoginModalWithAnimation} />
        <div className="innerModal">
            <div className="subHeading">{formConfig[currentModalState].subHeading}</div>
            <div className="heading">{formConfig[currentModalState].heading}</div>
            <div className="inputs">
                {formConfig[currentModalState].elements.map((element: InputElementType, index: number) => <div className="inputWrap" key={currentModalState + index}>
                    <div className="inputLabel">
                        <label>{element.name}</label>
                        {element.forgotText && <span className="forgotText">{element.forgotText}</span>}
                    </div>
                    <div className="inputField">
                        <input placeholder={element.placeholder} type={revealPassword ? "text" : element.type} />
                        {element.showRightIcon && <img className="rightIcon" src={element.showRightIcon} onClick={() => setRevealPassword(!revealPassword)} />}
                    </div>
                </div>)}
            </div>
            <div className="button">
                {formConfig[currentModalState].btnText}
            </div>
            <div className="switcherText" onClick={() => setCurrentModalState(registerModalState ? login.id : register.id)}>{formConfig[currentModalState].switcherText} <span>{registerModalState ? login.id : register.id}  →</span></div>
            <img src={closeButton} className="closeBtn" onClick={closeLoginModalWithAnimation} />
        </div>
    </div>
}

export default LoginModal;