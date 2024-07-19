import "../helperStyles.scss";

export const formatClassNames = (...args: any[]) =>
[...args].filter(Boolean).join(" ");

export const unlockBody = () => {
    document?.body?.classList?.remove("bodyLocked");
  };
  
export const lockBody = () => {
document?.body?.classList?.add("bodyLocked");
};