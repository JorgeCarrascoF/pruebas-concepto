import { useNavigate } from "react-router-dom";

const NavButton = ({text, route}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    }

    return (
        <button onClick={handleClick} className="nav-button">
            {text}
        </button>
    );
}

export default NavButton;