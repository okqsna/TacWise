import React from "react";
import './header_user.scss'

class HeaderUser extends React.Component{
    render(){
        return(
            <header className="Header_user">
                <div className = "header_left">
                    <div className = "header_left_logo">
                        <p className = "header_left_logo_txt">TacWise</p>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_right_links">
                        <a href="/firstaidkit">Моя аптечка</a>
                        <a href="/">Навчання</a>
                    </div>
                </div>
            </header>
        );
    }
}
export default HeaderUser;