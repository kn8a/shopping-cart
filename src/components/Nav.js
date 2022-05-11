import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import '../styles/nav.css'
import Icon from '@mdi/react'
import { mdiCart, mdiHome, mdiShopping } from '@mdi/js';

const Nav = (props) => {
    return(
    <nav>
        <div>
            <Link className='nav-logo' to={'/home'}><img alt="Store logo" src={logo}/></Link>
        </div>
        <div className="home-products">
            
                <Link className="menu-item" to={'/home'}>
                    <Icon  className='menu-icon' path={mdiHome}
                            title="Cart"
                            size={1.5}
                            color="darkcyan"
                            />
                    <div>Home</div>
                </Link>
            
            <Link className="menu-item" to={'/products'}>
                <Icon className="menu-icon" path={mdiShopping}
                            title="Cart"
                            size={1.5}
                            color="darkcyan"
                            />
                Products
            </Link>
        </div>
        <div>
            <Link className="menu-item" to={'/Cart'}>
                <Icon path={mdiCart}
                    title="Cart"
                    size={1.5}
                    color="darkcyan"
                    />
                {' '+ props.qty + ' items' }
            </Link>
        </div>

    </nav>
)
}

export default Nav;