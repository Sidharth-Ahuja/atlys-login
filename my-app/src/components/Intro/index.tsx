import "./Intro.scss";

interface Props{
    name?: string;
}

const Intro = (props: Props) => {
    const {name} = props;
    return <div className="introWrapper">
        <div className="nameHeading">Hello {name}</div>
        <div className="introText">How are you doing today? Would you like to share something with the<br/>community 🤗</div>
    </div>
}

export default Intro;