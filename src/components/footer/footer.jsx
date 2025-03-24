import React from "react"
import './footer.scss'

class Footer extends React.Component{
    render(){
        return(
            <footer className="Footer">
                <div className="Footer_left">
                    <div className="Footer_left_top">
                        <div className="Footer_left_logo">
                            <h4>TacWise</h4>
                            <p>
                            Вивчай тактичну <br/>
                            медицину легко та <br/>
                            ефективно !
                            </p>
                        </div>
                        <div className="Footer_left_info">
                            <p>Є запитання?<br/> Напиши нам! </p>
                            <a type="gmail" href="mailto:tacwise@gmail.com">tacwise@gmail.com</a>
                        </div>
                    </div>
                    <div className="Footer_left_bottom">
                        <p className="Footer_left_bottom_copyright">
                            @Created by UCU CS students
                        </p>
                    </div>
                </div>
                <div className="Footer_right">
                    <p>м. Львів, вул. Козельницька 2а</p>
                </div>
            </footer>
        )
    }
}
export default Footer;