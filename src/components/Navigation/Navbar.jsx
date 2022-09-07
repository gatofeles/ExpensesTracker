import "./Navbar.css"
import {useNavigate} from 'react-router-dom';

const Navbar = (props) =>{

    const navigate = useNavigate();

    const onLogout = () =>{
        localStorage.removeItem("finance-token");
        localStorage.removeItem("finance-user");
        navigate("/Login");
    }

    return(<div className="navbar"> 
        <div className="logout" onClick={onLogout}>Log out</div>
        </div>);

}

export default Navbar;