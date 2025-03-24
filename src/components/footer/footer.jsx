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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.3498097283873!2d24.02048377626017!3d49.817090232764855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f32aa260c7%3A0x193fdc166284c600!2z0LLRg9C70LjRhtGPINCa0L7Qt9C10LvRjNC90LjRhtGM0LrQsCwgMtCwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1742846283305!5m2!1suk!2sua"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p>м. Львів, вул. Козельницька 2а</p>
                </div>
            </footer>
        )
    }
}
export default Footer;