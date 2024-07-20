import "../helperStyles.scss";

export const unlockBody = () => {
    document?.body?.classList?.remove("bodyLocked");
  };
  
export const lockBody = () => {
document?.body?.classList?.add("bodyLocked");
};