
const ErrorButton = () => {

    return <button onClick={() => {
        throw new Error("This is a test error");
    }}>
        Oops! This is an error button!
    </button>
}

export default ErrorButton;