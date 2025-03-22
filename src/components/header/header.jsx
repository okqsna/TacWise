import React from "react";
import './header.scss'

class Header extends React.Component{
    render(){
        return(
            <header className="Header">
                <div className = "header_left">
                    <div className = "header_left_logo">
                        <p className = "header_left_logo_txt">TacWise</p>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_right_links">
                        <a href="/">Про нас</a>
                        <div className="header_right_links_sign_up">
                            <p className = "header_right_links_sign_up_txt">Увійти</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;