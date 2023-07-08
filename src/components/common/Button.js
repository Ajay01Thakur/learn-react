// import Header from "./Header";


export default function Button(props) {
    return (
        <>
            <button onClick={props.onClick} className={props.className}>{props.name}</button>
        </>
    );
}
