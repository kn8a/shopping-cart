import { Link } from "react-router-dom";
import '../styles/footer.css'
import logo from '../img/logo.png'

const Footer = (props) => {
    return(
        <div className="footer">
            <div className="footer-links">
                <ul>Navigation
                 <li><Link to={'/home'}>Home</Link></li>
                 <li><Link to={'/products'}>Products</Link></li>
                 <li><Link to={'/cart'}>Cart ({props.qty + ' items'})</Link></li>
                </ul>
            </div>
            <div className="credits">
                <div>Created by kn8a / <a href="https://github.com/kn8a/shopping-cart">Source code</a></div>
                <div>Products data sourced from <a href="https://fakestoreapi.com/">Fake Store API</a></div>
                <div>Homepage Photo by <a href="https://unsplash.com/photos/wQ9VuP_Njr4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Lucrezia Carnelos</a> on Unsplash</div>
            </div>
            <div className="footer-logo">
                <Link className='nav-logo' to={'/home'}><img alt="Store logo" src={logo}/></Link>
            </div>
        </div>
    )
}

export default Footer;