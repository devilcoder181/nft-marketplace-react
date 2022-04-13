import UIHeaderLogo from "./navLogo";
import logo from '../../assets/images/logo-icon.svg';
import { UILinkButton } from "../button/button";
import UINavList from "./nav";
import UIHeaderSearch from "./navSearch";
import "./header.scss";
import { useAuthContext } from "../../../store/authContext";
const UIHeader = ()=> {

    const {isLoggedIn} = useAuthContext();

    let navItems = [
        {name: 'Home', id: 'menu1', link: '/'},
        {name: 'Collections', id: 'menu2', link: '/collections'},
        {name: 'Marketplace', id: 'menu3', link: '/marketplace'},
        {name: 'Community', id: 'menu4', link: '/community'},
        {name: 'Auctions', id: 'menu5', link: '/auctions'},
    ];

    return (
        <header id="header">
            <div className="container">
                <div className='nav_wrapper'>
                    
                <UIHeaderLogo img={logo} />

                <div className="nav_content_wrapper">
                    <div className="nav_item">
                        <UINavList navobj={navItems} />
                    </div>
                    <div className="nav_item">
                        <UIHeaderSearch />
                    </div>
                    <div className="nav_item">
                        {!isLoggedIn && <UILinkButton link="/login" title="Connect Wallet" />}
                        {isLoggedIn && <UILinkButton link="/dashboard" title="Dashboard" />}
                    </div>
                </div>

                </div>
            </div>
        </header>
    )
}

export default UIHeader;