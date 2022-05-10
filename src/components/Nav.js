import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
    <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/Cart'}>Cart{' '+ props.qty }</Link>

    </nav>
)
}

export default Nav;