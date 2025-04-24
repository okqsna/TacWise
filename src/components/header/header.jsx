import React from "react";
import './header.scss'

class Header extends React.Component{
    render(){
        return(
            <header className="Header">
                <div className = "header_left">
                    <div className = "header_left_logo">
                        <a className = "header_left_logo_txt" href="/">TacWise</a>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_right_links">
                        <a href="#about">Про нас</a>
                        <a className="header_right_links_sign_up" href="/login">
                            <p className = "header_right_links_sign_up_txt">Увійти</p>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;