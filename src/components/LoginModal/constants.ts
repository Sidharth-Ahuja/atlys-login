import eye from "./assets/eye.svg";

export type ModalType =  "register" | "login";

export interface InputElementType {
    type: string;
    name:string;
    placeholder: string;
    forgotText?: string;
    showRightIcon?: string;
}

interface FormConfig {
    id: ModalType;
    heading: string;
    subHeading: string;
    elements: Array<InputElementType>;
    btnText: string;
    switcherText: string;
}

export const formConfig: Record<ModalType,FormConfig> = {
    register: {
        id: "register",
        heading: "Create an account to continue",
        subHeading: "SIGN UP",
        elements: [
            { name: "Email", type: "text", placeholder:"Enter your email"},
            { name: "Username", type: "text", placeholder:"Choose a preferred username"},
            { name: "Password", type: "text", placeholder:"Choose a strong password"}
        ],
        btnText : "Continue",
        switcherText: "Already have an account?"
    },
    login: {
        id: "login",
        heading: "Log into your account",
        subHeading: "WELCOME BACK",
        elements: [
            { name: "Email or Username", type: "text", placeholder:"Enter your email or username"},
            { name: "Password", type: "password", placeholder:"Enter your password", forgotText: "Forgot password?", showRightIcon: eye}
        ],
        btnText : "Login Now",
        switcherText: "Not registered yet?"
    }
}

