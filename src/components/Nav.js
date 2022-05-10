import { Link } from "react-router-dom";

const Nav = () => {
    return(
    <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/Cart'}>Cart</Link>

    </nav>
)
}

export default Nav;