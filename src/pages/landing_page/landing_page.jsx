import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import './landing_page.scss';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage">
                <div className="landingPage_header">
                    <Header/>
                </div>
                <div className="landingPage_startpage">
                    <div className="landingPage_startpage_txt">
                        <div className="landingPage_startpage_txt_top">
                            <span className="landingPage_startpage_txt_top_green">Вивчай</span>
                            <span className="landingPage_startpage_txt_top_darkgreen">тактичну <br/>медицину</span> 
                        </div>
                        <span className="landingPage_startpage_txt_top_green">легко та цікаво!</span>
                    </div>
                    <div className="landingPage_startpage_btn">
                        <a className="landingPage_startpage_btn_link">Доєднатись</a>
                        <div className="landingPage_startpage_btn_logo"></div>
                    </div>
                </div>
                <div className="landingPage_about" id="about">
                    <div className="landingPage_about_top">
                        <div className="landingPage_about_top_txt_1">ефективність</div>
                        <div className="landingPage_about_top_txt_2">якість</div>
                        <div className="landingPage_about_top_txt_3">рішучість</div>
                    </div>
                    <div className="landingPage_about_middle">
                        <p className="landingPage_about_middle_txt">
                            TacWise - це про
                        </p>
                    </div>
                    <div className="landingPage_about_bottom">
                        <p className="landingPage_about_bottom_txt_1">доступність</p>
                        <p className="landingPage_about_bottom_txt_2">стійкість</p>
                        <p className="landingPage_about_bottom_txt_3">вчитись, щоб <br/> діяти</p>
                    </div>
                </div>
                <div className="landingPage_joinus">
                    <h2 className="landingPage_joinus_caption">Чому?</h2>
                    <div className="landingPage_joinus_reasons">
                        <p className="landingPage_joinus_reasons_reason">
                        бо це про готовність взяти <br/>
                        відповідальність, коли важливо діяти.
                        </p>
                        <p className="landingPage_joinus_reasons_reason">
                        бо кожен із нас може опинитися поруч із <br/>
                        тим, хто потребує допомоги. 
                        </p>
                        <p className="landingPage_joinus_reasons_reason">
                        бо знання рятують життя, а сильна країна – <br/>
                        це люди, які не бояться навчатися і <br/>
                        допомагати.
                        </p>
                    </div>
                </div>
                <div className="landingPage_joinuslink">
                    <p className="landingPage_joinuslink_txt">
                    Прагнеш <br/>
                    навчатись?
                    </p>
                    <div className="landingPage_joinuslink_btn">
                        <a className="landingPage_joinuslink_btn_txt">
                            Вривайся до нас
                        </a>
                        <div className="landingPage_joinuslink_btn_logo"></div>
                    </div>
                </div>
                <div className="landingPage_footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default LandingPage;