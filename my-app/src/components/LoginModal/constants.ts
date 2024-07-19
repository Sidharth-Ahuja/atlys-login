export const formConfig:any = {
    register: {
        id: "register",
        heading: "Create an account to continue",
        subHeading: "SIGN UP",
        elements: [
            { name: "Email", placeholder:"Enter your email"},
            { name: "Username", placeholder:"Choose a preferred username"},
            { name: "Password", placeholder:"Choose a strong password"}
        ],
        btnText : "Continue",
        switcherText: "Already have an account?"
    },
    login: {
        id: "login",
        heading: "Log into your account",
        subHeading: "WELCOME BACK",
        elements: [
            { name: "Email or Username", placeholder:"Enter your email or username"},
            { name: "Password", placeholder:"Login now"}
        ],
        btnText : "Continue",
        switcherText: "Not registered yet?"
    }
}

